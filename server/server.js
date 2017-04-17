'use strict';
const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
io.on('connection', function(socket) {
    const socketid = socket.id;
    console.log('a user connected with session id ' + socket.id);
    socket.on('disconnect', function() {
        console.log('user disconnected');
    });
    socket.on('message', function(jsonMsg) {
        console.log('received message from client: ' + JSON.stringify(jsonMsg));
        io.sockets.in(jsonMsg.room).emit('message', {
            nickname: jsonMsg.nickname,
            message: jsonMsg.message
        });
    });
    socket.on('add room', function(jsonMsg) {
        io.sockets.emit('add room', jsonMsg);
        console.log("creating room: " + jsonMsg);
    });
    socket.on('join room', function(jsonMsg) {
        socket.join(jsonMsg);
    });
});
server.listen(3000, function() {
    console.log('Server started (3000)');
});