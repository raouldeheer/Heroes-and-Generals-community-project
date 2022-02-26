import BufferCursor from "./buffercursor";
import { keys } from "./types";
import { bytesToString } from "./utils";
import { Client } from "./client";
import { ip, port } from "./env";

const cl = new Client(ip, port);
cl.on("message", (data: Buffer) => {
    const element = new BufferCursor(data);
    const text = bytesToString(element);
    const plen = element.readUInt32LE().toString().padEnd(5);
    element.move(4);
    const id = element.readUInt32LE().toString().padEnd(5);

    const size = element.readUInt32LE() - 4;
    const typeLength = element.readUInt32LE() - 4;
    const typeText = text.substr(20, typeLength);

    if (size - typeLength == 4) {
        return;
    }
    element.move(typeLength);
    const DataBuf = element.slice();
    const DataLen = DataBuf.readUInt32LE() - 4;
    DataBuf.seek(0);

    let result;
    if (keys.has(typeText)) {
        switch (typeText) {
            case "QueryServerInfoResponse":
                // cl.sendExamplePacket("StartLogin");
                cl.sendPacketToBuffer("QueryBannedMachineRequest");
                break;
            case "QueryBannedMachineResponse":
                cl.sendPacketToBuffer("StartLogin");
                break;
            case "LoginQueueUpdate":
                if (Number(id) == 0) {
                    cl.sendPacketToBuffer("login2_begin");
                }
                break;
            case "login2_result":
                cl.sendExamplePacket("subscribecommandnodeview");
                break;
        }
        // Find class to parse packet with.
        const klas = keys.get(typeText)!;
        result = klas.parse(DataBuf);
        if (typeText == "login2_challenge") {
            const resultdata = result as string;
            const datas = resultdata.split(" - ");

            cl.sendLogin({
                salt: datas[0],
                tempSessionid: datas[1],
                encryptedSessionkey: datas[2],
            });
        }
    } else {
        console.log(typeText);
    }

    const startString = `${plen} ${id} ${typeText.padEnd(35)}`;
    const midString = `${DataLen.toString().padEnd(5)}`;
    const endString = `${text.substr(20 + typeLength, 50)}`;
    const outputStr = `${startString} ${result
        ? result // Print bytes when class didn't give any results.
        : `${midString} ${endString}`
        }`;
    console.log(outputStr);
});
