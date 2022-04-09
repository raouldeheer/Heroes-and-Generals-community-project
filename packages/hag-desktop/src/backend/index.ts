import { app, BrowserWindow, ipcMain } from "electron";
import { Client } from "hag-network-client";
import { ip, port } from "hag-network-client/dist/env";
import { ResponseType } from "hag-network-client/dist/protolinking/classKeys";
import Long from "long";

// This allows TypeScript to pick up the magic constant that's auto-generated by Forge's Webpack
// plugin that tells the Electron app where to look for the Webpack-bundled app code (depending on
// whether you're running in development or production).
declare const MAIN_WINDOW_WEBPACK_ENTRY: string;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  app.quit();
}

let client: Client;

ipcMain.on("startClient", (event, data) => {
  if (!client) {
    startClient(event.sender, data.userName, data.password);
  }
});

ipcMain.handle("GetMissionDetailsRequest", async (_, data) => {
  const result = await new Promise(res => {client.sendPacket("GetMissionDetailsRequest", data, res)});
  return result;
})

function startClient(webContents: Electron.WebContents, userName: string, password: string) {
  client = new Client(ip, port, webContents.userAgent, userName, password);
  const startTime = Date.now();
  client.once("loggedin", async () => {
    webContents.send("loggedin");
    client.sendPacket("query_war_catalogue_request", {}, () => {
      client.sendPacket("subscribewarmapview");
    });
  }).on("loginFailed", () => {
    webContents.mainFrame.executeJavaScript("alert('Login failed!');");
    // TODO Add try again logic
  }).on("query_war_catalogue_response", (data) => {
    webContents.send("warCatalogueFactions", data.warcataloguedata[0].warCatalogueFactions);
  }).on("join_war_response", async (data: { msg: ResponseType, redirectSrv?: string; }) => {
    if (data.msg === ResponseType.ok) { // TODO redo war ending logic
      if (data.redirectSrv) {
        console.log(`redirectSrv detected: ${data.redirectSrv}`);
      }
      client.sendPacket("unsubscribewarmapview");
      setTimeout(() => {
        client.sendPacket("subscribewarmapview");
      }, 500);
    } else {
      console.error(`ERROR: ${data}`);
    }
  }).on("message", async (typetext, data) => {
    if (typetext == "KeyValueChangeSet") {
      webContents.send("KeyValueChangeSet", data);
      if (data?.set) {
        for (const iterator of data.set) {
          switch (iterator.key) {
            case "war": // TODO redo war ending logic
              if (iterator.value.sequelwarid !== "0") {
                // TODO make popup to ask user to switch.
                console.log(`${iterator.value.id} ended, switching to: ${iterator.value.sequelwarid}`);
                client.sendPacket("join_war_request", {
                  warid: Long.fromString(iterator.value.sequelwarid),
                  factionid: Long.ZERO,
                  playedFirstBlood: 0,
                });
              } // TODO redo war ending logic
              break;
          }
        }
      }
    }
  }).on("LoginQueueUpdate", (pos) => {
    webContents.send("LoginQueueUpdate", pos);
  }).on("closed", () => {
    console.log("Socket closed!");
    console.log(`After ${Date.now() - startTime}ms`);
  });
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  });

  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

