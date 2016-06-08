var express = require('express');
var app = express();


app.use(express.static('public'));

app.get('/', function(req, res) {
  res.send(index.html);
});

app.listen(3000, function(){
  console.log('Ready on Port 3000');
});

