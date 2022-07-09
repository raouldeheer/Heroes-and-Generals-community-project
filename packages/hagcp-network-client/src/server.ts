import { EventEmitter } from "events";
import { createServer, Socket as NetSocket, Server as NetServer } from "net";
import { createHash, createHmac, Hmac } from "crypto";
import { ClassKeys, ResponseType } from "./protolinking/classKeys";
import { Socket } from "./socket";

type Unused = undefined;

export class ClientHandler extends EventEmitter {
    private con: Socket;
    private server: Server;

    constructor(socket: NetSocket, parent: Server) {
        super();
        console.log("New socket opened");
        this.server = parent;
        this.con = new Socket(socket, true);

        this.con.on("close", err => {
            this.emit("close", err);
        });

        this.con.on("error", console.error);

        this.addHandlers();
    }

    public sendPacket<InputType = undefined>(className: ClassKeys, payload?: InputType, id = 0): boolean {
        return this.con.sendPacket<InputType, undefined>(className, payload, undefined, id);
    }

    private addHandlers() {
        this.con.on(ClassKeys.QueryServerInfo, (result: Unused, id: number) => {
            this.sendPacket(ClassKeys.QueryServerInfoResponse, {
                servertime: "1656617936172",
                playersInWar: 420,
                onlineplayers: 6969,
                version: "QQ 170947",
                metricsUrl: "",
                redShiftUrl: "",
                engageUrl: "",
            }, id);
        });
        this.con.on(ClassKeys.QueryBannedMachineRequest, (result: { machineIdentifier: string, machineIdentifierOld: string; }, id: number) => {
            this.sendPacket(ClassKeys.QueryBannedMachineResponse, {
                isBanned: false,
                banReason: "",
            }, id);
        });
        this.con.on(ClassKeys.StartLogin, () => {
            this.server.addToLoginQueue(this);
        });
        this.con.on(ClassKeys.login2_begin, (result: { username: string; }, id: number) => {
            // TODO handle login
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
    private readonly clients: ClientHandler[];
    private readonly loginQueue: ClientOnQueue[];
    private loginSlowDown: boolean;

    constructor() {
        this.loginSlowDown = false;
        this.clients = [];
        this.loginQueue = [];
        this.tcpServer = createServer((socket) => {
            this.clients.push(new ClientHandler(socket, this));
        });

        setInterval(() => {
            if (this.loginQueue.length >= 1 && !this.loginSlowDown) {
                const item = this.loginQueue.shift();
                if (item) {
                    item.client.sendPacket(ClassKeys.LoginQueueUpdate, {
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
                item.client.sendPacket(ClassKeys.LoginQueueUpdate, {
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
