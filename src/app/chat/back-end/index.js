let app = require('express')();
let server = require('http').createServer(app);
let io = require('socket.io')(server);

io.on('connection', socket => {
    socket.on('disconnect', () => {
        io.emit('users-changed', {user: socket.username, event: 'left'});
    });
    socket.on('set-name', name => {
        socket.username = name;
        io.emit('users-changed', {user: socket.username, event: 'left'});
    });
    socket.on('send-message', message => {
        io.emit('message', {msg: message.text, user: socket.username, createdAt: new Date() })
    });

});

var port = process.env.PORT || 3001;

server.listen(port, () => {
    console.log('server in localhost:' + port);
})