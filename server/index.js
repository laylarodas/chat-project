const express = require('express');
const app = express()
const server = require('http').Server(app);
const io = require('socket.io')(server);


app.get('/', function (req, res) {
    res.status(200).send('test route')
})


server.listen(6677, function () {
    console.log('Server running on port http://localhost:6677');
})




