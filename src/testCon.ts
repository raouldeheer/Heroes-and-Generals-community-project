import { Client } from "./client";
import { ip, port } from "./env";

const cl = new Client(ip, port);
cl.once("loggedin", () => {
    cl.sendPacketToBuffer("subscribecommandnodeview");
});
cl.on("message", (typetext, data) => {

});
