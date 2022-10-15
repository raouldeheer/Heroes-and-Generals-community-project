import { Server } from "hagcp-network-client/server";

(() => {
    const server = new Server;
    server.listen(6969, "127.69.69.69");
    console.log("Running on port");

})();