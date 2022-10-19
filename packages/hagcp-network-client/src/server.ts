import { EventEmitter } from "events";
import { createServer, Socket as NetSocket, Server as NetServer } from "net";
import { createHash, createHmac, randomBytes } from "crypto";
import { ClassKeys, ResponseType } from "./protolinking/classKeys";
import { Socket } from "./socket";
import { PacketClass, packetClassParser } from "./protolinking/linking";
import Long from "long";

export class ClientHandler extends EventEmitter {
    public address: string;
    private con: Socket;
    private server: Server;
    private auth: boolean;

    constructor(socket: NetSocket, parent: Server) {
        super();
        console.log("New socket opened");
        if (!socket.remoteAddress || !socket.remotePort) throw new Error("remoteAddress undefined!");
        this.address = socket.remoteAddress + ":" + socket.remotePort;
        this.auth = false;
        this.server = parent;
        this.con = new Socket(socket, false);

        this.con.on("close", () => {
            this.emit("close");
        });

        this.con.on("error", console.error);

        this.addHandlers();
    }

    public sendBuffer<RType>(
        name: string,
        buffer: Buffer,
        callback?: (result: RType) => void,
        id = 0,
    ) {
        this.con.sendBuffer(name, buffer, callback, id);
    }

    /**
     * sendClass sends a packet to the server
     * @param packetClass class to send
     * @param payload payload to send
     * @param id response id
     * @returns true if sending was succesfull
     */
    public sendClass<T extends packetClassParser>(
        packetClass: T,
        payload?: Parameters<T["toBuffer"]>[0],
        id = 0,
    ): boolean {
        return this.con.sendClass<T, undefined>(packetClass, payload, undefined, id);
    }

    private addHandlers() {
        this.con.on(ClassKeys.QueryServerInfo, (_, id) => {
            this.sendClass(PacketClass.QueryServerInfoResponse, {
                servertime: new Date().getTime().toString(),
                playersInWar: 420,
                onlineplayers: this.server.onlinePlayers,
                version: "QQ 170947",
            }, id);
        });
        this.con.on(ClassKeys.QueryBannedMachineRequest, (result, id) => {
            this.sendClass(PacketClass.QueryBannedMachineResponse, {
                isBanned: false,
                banReason: "",
            }, id);
        });
        this.con.on(ClassKeys.StartLogin, () => {
            // this.server.addToLoginQueue(this);
            this.sendClass(PacketClass.LoginQueueUpdate, {
                positionInQueue: 1,
                mayProceed: true,
                originalId: 3,
                result: ResponseType.ok,
            });
        });
        this.con.on(ClassKeys.login2_begin, (result, id) => {
            //! THIS IS FOR TESTING ONLY, DO NOT USE IN PRODUCTION
            const username = result.username;
            const password = username; // TODO implement correct auth method with encrypted password
            const salt = randomBytes(8).toString("base64");
            const tempSessionid = randomBytes(19).toString("base64");
            const encryptedSessionkey = randomBytes(16).toString("base64");
            this.sendClass(PacketClass.login2_challenge, {
                encryptedSessionkey,
                tempSessionid,
                salt,
                responseCode: ResponseType.challenge,
            }, id);
            this.con.once(ClassKeys.login2_response, (result, id) => {
                // Decoded sessionid.
                const sessionid = Buffer.from(tempSessionid, "base64");
                // Concat buffers and createHash.
                const sha1concat = (d1: Buffer, d2: Buffer) =>
                    createHash("sha1").update(Buffer.concat([d1, d2])).digest();
                // Create loginHash.
                const loginkeyhash = sha1concat(sha1concat(
                    Buffer.from(password, "latin1"),
                    Buffer.from(salt, "base64")
                ), sessionid);

                const encryptedSessionkeyWithLoginHash = Buffer.from(encryptedSessionkey, "base64")
                    .map((value, i) => value ^ loginkeyhash[i % loginkeyhash.length]);
                const correctResult = createHmac("sha1", encryptedSessionkeyWithLoginHash)
                    .update(sessionid)
                    .digest("base64");

                const loginSuccesfull = result.tempSessionid === tempSessionid && result.digest === correctResult;
                if (loginSuccesfull) this.auth = true;

                this.sendClass(PacketClass.login2_result, {
                    time: new Date().getTime().toString(),
                    response: loginSuccesfull
                        ? ResponseType.login_success
                        : ResponseType.wrong_password,
                    username,
                    currentplayer: {
                        id: Long.fromString("6571270141543519155"),
                        gamertag: "mflyztktdjazboaksh",
                        invertmouse: 0,
                        invertmouseairplane: 0,
                        mousesensitivity: 0.4000000059604645,
                        administrator: "0",
                        mousecontrolledcars: 0,
                        showcrosshair: 1,
                        showcrosshairVehicles: 1,
                        war: Long.fromString("3378919346139646444"),
                        factionid: Long.fromString("9127365240673321396"),
                        subscribedupto: "0",
                        goldBought: Long.fromString("0"),
                        goldEarned: Long.fromString("0"),
                        goldUsed: Long.fromString("0"),
                        creditsBought: Long.fromString("0"),
                        creditsEarned: Long.fromString("0"),
                        creditsUsed: Long.fromString("0"),
                        firstActionGameDate: "19691231230000Z",
                        numloginsFlash: 0,
                        numloginsMobile: 0,
                        language: "en",
                        warfundsBought: Long.fromString("0"),
                        warfundsEarned: Long.fromString("0"),
                        warfundsUsed: Long.fromString("0"),
                        metricsUid: "4a7026a7-8008-4cc3-b132-2948216ef774",
                        yellowGriefPoints: 0,
                        redGriefPoints: 0,
                        latestRedGriefPointTimestamp: "",
                        tier: 0,
                        lastLogin: "20220622195146Z",
                        tutorialsCompleted: 0,
                        goldBoughtSteam: Long.fromString("0"),
                        skillLevel: 0,
                        invertmouseturret: 0,
                        totalScore: Long.fromString("0"),
                        level: 0,
                        isDeleted: false,
                        currencyCode: "",
                        currencyRegion: "",
                        achievementsBits: [],
                        unlockBits: [],
                    }
                }, id);
            });
        });
        this.con.on("message", (type, result) => {
            if (type.startsWith("subscribe") || type.startsWith("Subscribe")) {
                setTimeout(() => {
                    this.sendClass(PacketClass.subscriberesponse, {});
                }, 50);
            }
        });
        // TODO handle messages.
    }

    public close() {
        this.con.close();
    }
}

export class Server {
    private readonly tcpServer: NetServer;
    private readonly clients: Map<string, ClientHandler>;
    private readonly loginQueue: ClientHandler[];
    private loginSlowDown: boolean;
    private intervals: NodeJS.Timer[];

    constructor() {
        this.loginSlowDown = false;
        this.clients = new Map;
        this.loginQueue = [];
        this.intervals = [];
        this.tcpServer = createServer((socket) => {
            try {
                const clienthandler = new ClientHandler(socket, this);
                clienthandler.once("close", () => {
                    this.clients.delete(clienthandler.address);
                });
                this.clients.set(clienthandler.address, clienthandler);
            } catch (error) {
                console.error(error);
            }
        });

        this.intervals.push(setInterval(() => {
            if (this.loginQueue.length >= 1 && !this.loginSlowDown) {
                const item = this.loginQueue.shift();
                if (item) {
                    item.sendClass(PacketClass.LoginQueueUpdate, {
                        positionInQueue: 1,
                        mayProceed: true,
                        originalId: 3,
                        result: ResponseType.ok,
                    });
                }
            }
        }, 5000));
        this.intervals.push(setInterval(() => {
            this.loginQueue.forEach((item, index) => {
                item.sendClass(PacketClass.LoginQueueUpdate, {
                    positionInQueue: index + 1,
                    mayProceed: false,
                    originalId: 3,
                    result: ResponseType.ok,
                });
            });
        }, 2000));
    }

    public get onlinePlayers(): number {
        return this.clients.size;
    }

    public addToLoginQueue(client: ClientHandler) {
        this.loginQueue.push(client);
    }

    public listen(port: number, host: string) {
        this.tcpServer.listen(port, host);
    }

    public close() {
        this.intervals.forEach(clearInterval);
        this.tcpServer.close();
    }
}
