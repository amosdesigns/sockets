/**
 * Created by Jerome on 8/30/16.
 */
var PORT = process.env.PORT || 3000,
    express = require('express'),
  app = express(),
    http = require('http').Server(app);

app.use(express.static(__dirname +'/public'));


app.listen(PORT, function () {
    "use strict";
    console.log('***********************************************************');
    console.log('***********************************************************');
    console.log('******** NEW Express Server started on PORT: ' + PORT + "! ********");
    console.log('***********************************************************');
    console.log('***********************************************************');
});
