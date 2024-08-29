const express = require('express');
const app = express()
const server = require('http').Server(app);
const io = require('socket.io')(server);


app.use(express.static('client'))


app.get('/', function (req, res) {
    res.status(200).send('test route')
});

io.on('connection', function (socket) {
    console.log('The customer with IP: ' + socket.handshake.address + 'has connected')
})


server.listen(6677, function () {
    console.log('Server running on port http://localhost:6677');
})




