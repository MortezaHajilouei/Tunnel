// const express = require('express');
// const net = require('net');

// const app = express();

// const server = net.createServer(socket => {
//   console.log(socket)
//   new SocketHandler(socket, {}).handle();
// });
// server.listen(8080, function () {
//   console.log(`Listening on port ${8080}`);
// });


// app.listen(8081,function () {
//   console.log(`Listening on port ${8081}`);
// })

const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const SocketHandler = require('./SocketHandler')

app.all(function (req, res, next) {
  res.send('sstat as');
});

//Whenever someone connects this gets executed
io.on('connection', function (socket) {
  new SocketHandler(socket, {}).handle();
});

const PORT = process.env.PORT || 5000

http.listen(PORT, function () {
  console.log('listening on *:PORT');
});