import { Client } from "../dist/index";
import { Server } from "../dist/server";


describe('Test connection', () => {
    const server = new Server;
    server.listen(3000, "127.1.1.1");

    jest.setTimeout(15000);
    it('Connect to socket', done => {
        const client = new Client("127.1.1.1", 3000, "", "user", "user", false);

        client.once("loggedin", () => {
            expect(client.connected).toBeTruthy();
            client.close();
            server.close();
            setTimeout(() => {
                done();
            }, 200);
        }).once("error", err => {
            console.error(err);
            fail();
        });
    });
});
