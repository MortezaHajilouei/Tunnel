const express = require('express');
const net = require('net');

const app = express();
const SocketHandler = require('./SocketHandler')
const PORT = process.env.PORT || 8080;

const server = net.createServer(socket => {
  console.log(socket)
  new SocketHandler(socket, {}).handle();
});

server.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});