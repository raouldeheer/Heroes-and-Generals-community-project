import fs from "fs";

const fileToProto = (file: string) => file
    ?.split(/ {6}private static function InitDescriptors\(\) : void\r\n/g)[1]
    ?.split(/[{}]/g)[1]
    ?.replace(/\s/g, "")
    ?.split(/;/g)
    ?.filter(e => e)
    ?.map(e => e.split(/[()]/g)[1].split(/,/g))
    ?.filter(e => e.join(""))
    ?.map(e => {
        const [name, messageName, type, label, id] = e;
        return `${label.replace("Descriptor.LABEL_", "").toLowerCase()
            } ${messageName.replace(/"/g, "")
            || (type.replace("Descriptor.", "").toLowerCase()=="enum"? "Common.Response" :type.replace("Descriptor.", "").toLowerCase())
            } ${name.replace(/"/g, "")} = ${id};`;
    })?.join("\r\n");

const scripts = fs.readdirSync("./game/scripts");

scripts.forEach(e => {
    const files = fs.readdirSync(`./game/scripts/${e}`);
    const result = files
        .map(v => {
            const name = v.replace(".as", "");
            const content = fs.readFileSync(`./game/scripts/${e}/${v}`, "utf8");
            return `message ${name} {\r\n${fileToProto(content) || ""}\r\n}\r\n`;
        })
        .filter(e => e)
        .join("\r\n");
    fs.writeFileSync(`./game/outProtoScripts/${e}.proto`,
        `package ${e};\r\nsyntax = "proto3";\r\n\r\n${result}`, "utf8");
});
