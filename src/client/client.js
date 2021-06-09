const { BrowserWindow, app } = require("electron")

function createWindow() {
    const win = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            preload: path.join(__dirname, "preload.js")
        }
    })

    win.loadFile("./index.html")
}

app.whenReady().then(() => {
    createWindow()
})