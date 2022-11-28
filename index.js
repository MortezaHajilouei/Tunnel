// const express = require('express');
// const net = require('net');

// const app = express();
// const SocketHandler = require('./SocketHandler')

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

app.all(function(req, res,next) {
   res.send('index.html');
});

//Whenever someone connects this gets executed
io.on('connection', function(socket) {
   console.log('A user connected');

   //Whenever someone disconnects this piece of code executed
   socket.on('disconnect', function () {
      console.log('A user disconnected');
   });
});

http.listen(3000, function() {
   console.log('listening on *:3000');
});