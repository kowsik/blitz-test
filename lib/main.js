var express = require('express');

var app = express.createServer(express.logger());
app.get('/', function(req, res) {
	res.send("blitz.io crash test dummy");
});

var port = process.env.PORT || 9292;
app.listen(port, function() {
    console.log('listening on ' + port);
});
