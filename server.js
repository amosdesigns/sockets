/**
 * Created by Jerome on 8/30/16.
 */
var PORT = process.env.PORT || 3000,
    express = require('express'),
    app = express(),
    http = require('http')
        .Server(app),
    io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));
io.on('connection', function () {
    console.log('***********************************************************');
    console.log('***********************************************************');
    console.log('**********    User connected vis socket.io!    ************');
    console.log('***********************************************************');
    console.log('***********************************************************');
});


http.listen(PORT, function () {
    "use strict";
    console.log('***********************************************************');
    console.log('***********************************************************');
    console.log('******** NEW Express Server started on PORT: ' + PORT + "! ********");
    console.log('***********************************************************');
    console.log('***********************************************************');
});
