//* Derrova
//? Server

// https://socket.io/

const { Server } = require("socket.io")

const chalk = require('chalk')
const path = require('path')
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = new Server(server)

app.get('/client', (req, res) => {
  res.sendFile(path.join(__dirname, '../client', 'index.html'));
});


io.on('connection', (socket) => {
  console.log(chalk.blue('Derrova-Server | ') + chalk.green('A user connected'))
  socket.on("message", (a) => {
    io.emit("message", a)
  })

  socket.on('disconnect', () => {
    console.log(chalk.blue('Derrova-Server | ') + chalk.green('A user disconnected'));
  });
})

server.listen(process.env.PORT || 6969, function() {
  var host = server.address().address
  var port = server.address().port
  console.log(chalk.blue('Derrova-Server | ') + chalk.green(`Listening at *:${port}`))
});