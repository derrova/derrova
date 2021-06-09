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

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client', 'index.html'));
});

io.on('connection', (socket) => {
  console.log(chalk.blue('Derova-Server | ') + chalk.green('A user connected'))
  
  socket.on('disconnect', () => {
    console.log(chalk.blue('Derrova-Server | ') + chalk.green('A user disconnected'));
  });

  socket.on('chat message', (msg) => {
    console.log(chalk.blue('Derrova-Server | Message: ') + msg)
  })
})

server.listen(3000, () => {
  console.log(chalk.blue('Derrova-Server | ') + chalk.green('Listening on *:3000'));
});