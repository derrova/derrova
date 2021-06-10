//! VERY EXPERIMENTAL

const path = require('path');
const { BrowserWindow, app } = require("electron")

function createWindow() {
    const win = new BrowserWindow({
        width: 1280,
        height: 720,
        center: true,
        resizable: true,
        webPreferences: {
            nodeIntegration: false,
            show: false
        }
    })

    win.loadURL("127.0.0.1:6969/client") // bad solution
}

app.whenReady().then(() => {
    createWindow()
})