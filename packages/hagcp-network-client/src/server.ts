import { EventEmitter } from "events";
import { createServer, Socket as NetSocket, Server as NetServer } from "net";
import { createHash, createHmac, randomBytes } from "crypto";
import { ClassKeys, ResponseType } from "./protolinking/classKeys";
import { Socket } from "./socket";
import { PacketClass, PacketClassKeys, packetClassParser } from "./protolinking/linking";

export class ClientHandler extends EventEmitter {
    public address: string;
    private con: Socket;
    private server: Server;
    private auth: boolean;

    constructor(socket: NetSocket, parent: Server) {
        super();
        console.log("New socket opened");
        if (!socket.remoteAddress) throw new Error("remoteAddress undefined!");
        this.address = socket.remoteAddress;
        this.auth = false;
        this.server = parent;
        this.con = new Socket(socket, true);

        this.con.on("close", () => {
            this.emit("close");
        });

        this.con.on("error", console.error);

        this.addHandlers();
    }


    /**
     * sendClass sends a packet to the server
     * @param packetClass class to send
     * @param payload payload to send
     * @param callback callback for response
     * @returns true if sending was succesfull
     */
    public sendClass<
        T extends packetClassParser,
        RType
    >(
        packetClass: T,
        payload?: Parameters<T["toBuffer"]>[0],
        id = 0,
    ): boolean {
        return this.con.sendClass<T, RType>(packetClass, payload, undefined, id);
    }

    /**
     * sendPacket sends a packet to the server
     * @param className name of class to send
     * @param payload payload to send
     * @param callback callback for response
     * @returns true if sending was succesfull
     */
    public sendPacket<
        ClassType extends PacketClassKeys,
        IType = Parameters<(typeof PacketClass)[ClassType]["toBuffer"]>[0],
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        RType = any
    >(
        className: ClassType,
        payload?: IType,
        id = 0,
    ): boolean {
        return this.con.sendPacket<ClassType, IType, RType>(className, payload, undefined, id);
    }

    private addHandlers() {
        this.con.on(ClassKeys.QueryServerInfo, (_, id) => {
            this.sendClass(PacketClass.QueryServerInfoResponse, {
                servertime: new Date().getTime().toString(),
                playersInWar: 420,
                onlineplayers: 6969,
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
            this.server.addToLoginQueue(this);
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

                const correctResult = createHmac("sha1", Buffer.from(encryptedSessionkey, "base64")
                    .map((value, i) => value ^ loginkeyhash[i % loginkeyhash.length]))
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
                }, id);
            });
        });
        // TODO handle messages.
    }

    public close() {
        this.con.close();
    }
}

interface ClientOnQueue {
    client: ClientHandler;
    originalId: number;
}

export class Server {
    private readonly tcpServer: NetServer;
    private readonly clients: Map<string, ClientHandler>;
    private readonly loginQueue: ClientOnQueue[];
    private loginSlowDown: boolean;

    constructor() {
        this.loginSlowDown = false;
        this.clients = new Map;
        this.loginQueue = [];
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

        setInterval(() => {
            if (this.loginQueue.length >= 1 && !this.loginSlowDown) {
                const item = this.loginQueue.shift();
                if (item) {
                    item.client.sendClass(PacketClass.LoginQueueUpdate, {
                        positionInQueue: 1,
                        mayProceed: true,
                        originalId: item.originalId,
                        result: ResponseType.ok,
                    });
                }
            }
        }, 5000);
        setInterval(() => {
            this.loginQueue.forEach((item, index) => {
                item.client.sendClass(PacketClass.LoginQueueUpdate, {
                    positionInQueue: index + 1,
                    mayProceed: false,
                    originalId: item.originalId,
                    result: ResponseType.ok,
                });
            });
        }, 2000);
    }

    public addToLoginQueue(client: ClientHandler) {
        this.loginQueue.push({ client, originalId: this.loginQueue.length + 1 });
    }

    public listen(port: number, host: string) {
        this.tcpServer.listen(port, host);
    }
}

(() => {
    const server = new Server;
    server.listen(6969, "127.69.69.69");
    console.log("Running on port");

})();
