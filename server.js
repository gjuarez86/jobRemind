var express = require('express');
var app = express();
var cheerio = require('cheerio');
var request = require('request');
var searchRoutes = require('./routes/search');
var sessionsRoutes = require('./routes/sessions');
var fs = require('fs');
var bodyParser = require('body-parser');
// Twilio Credentials 
var accountSid = 'ACf2c336e0b36ace88e3b0308f0ebf0a59'; 
var authToken = '2a38f364bc92c90dad926e1a279a3181'; 
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/jobRemind');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));

//Routes 
app.use('/search', searchRoutes);
app.use('/sessions', sessionsRoutes);

app.get('/', function(req, res) {
  res.render('index');            
});

app.get('/login', function(req, res) {
	res.render('login.html');
})

app.listen(3000, function(){
  console.log('Ready on Port 3000');
});

