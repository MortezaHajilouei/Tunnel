const express = require('express');
const net = require('net');

const app = express();
const SocketHandler = require('./SocketHandler')

const server = net.createServer(socket => {
  console.log(socket)
  new SocketHandler(socket, {}).handle();
});

server.listen(8080, function () {
  console.log(`Listening on port ${8080}`);
});


app.listen(8081,function () {
  console.log(`Listening on port ${8081}`);
})