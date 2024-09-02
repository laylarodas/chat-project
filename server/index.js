const express = require('express');
const app = express()
const server = require('http').Server(app);
const io = require('socket.io')(server, {
    cors: {
        origin: '*'
    }
});


app.use(express.static('client'))


app.get('/', function (req, res) {
    res.status(200).send('test route')
});

const messages = [{
    id: 1,
    text: 'Welcome to private chat',
    nickname: 'Bot - laylarodas'
}]

io.on('connection', function (socket) {
    console.log('The customer with IP: ' + socket.handshake.address + 'has connected')

    socket.emit('messages', messages);

    socket.on('add-message', function(data){
        messages.push(data);
        io.sockets.emit('messages', messages)
    })
})


server.listen(6677, function () {
    console.log('Server running on port http://localhost:6677');
})




