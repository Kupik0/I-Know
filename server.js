const express = require('express');
const app = express();
const server = require('http').Server(app)
const io = require('socket.io')(server);

app.get('/', function(req,res){
    console.log("Get Method")
});
io.on('connection', function (socket){
    console.log('a user connected', socket.client.id);
    socket.on("ready", ()=> {
io.to(socket.client.id).emit("get client id", socket.client.id)
    });
    socket.on("send message", (data) => {
        io.emit("listen message", data)
        
    });
    socket.on('disconnect', ()=> {
        io.emit("listen message", data)
    });
    socket.on('disconnect', ()=> {
        console.log('user disconnected');
    });
});
server.listen(3001, () => {
    console.log('listening on *:3001');
  });