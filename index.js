var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('./build'));

app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, './build', 'index.html'));
})

app.listen(80, function() {
        console.log('listening on port 80....');
});