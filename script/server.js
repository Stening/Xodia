var http = require('http');
var fs = require("fs");
var booking = require("./bookingmap.js");
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
fs.appendFile("./test.txt",booking.seatinfosend);
    
    
    
}).listen(process.env.PORT, process.env.IP);
