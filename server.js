/**
 * Created by Jerome on 8/30/16.
 */
var PORT = process.env.PORT || 3000,
    moment = require('moment'),
    express = require('express'),
    app = express(),
    http = require('http')
        .Server(app),
    io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

io.on('connection', function (socket) {
    console.log('***********************************************************');
    console.log('***********************************************************');
    console.log('**********    User connected vis socket.io!    ************');
    console.log('***********************************************************');
    console.log('***********************************************************');

    socket.on('message', function(message){
        "use strict";

        console.log('Message received: '+ message.text);
        message.timestamp = moment().valueOf();
        io.emit('message', message);
    });

    socket.emit('message', {
        text: "Welcome to the chat application!"
    });
});
http.listen(PORT, function () {
    "use strict";
    console.log('***********************************************************');
    console.log('***********************************************************');
    console.log('******** NEW Express Server started on PORT: ' + PORT + "! ********");
    console.log('***********************************************************');
    console.log('***********************************************************');
});
