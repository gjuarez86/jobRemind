var express = require('express');
var app = express();
var cheerio = require('cheerio');
var request = require('request');
var searchRoutes = require('./routes/search');
var sessionsRoutes = require('./routes/sessions');
var profileRoutes = require('./routes/profile');
var fs = require('fs');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var cookieParser = require('cookie-parser');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var About = require('./Components/About');

// Twilio Credentials 
var accountSid = 'ACf2c336e0b36ace88e3b0308f0ebf0a59'; 
var authToken = '2a38f364bc92c90dad926e1a279a3181'; 
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/jobRemind');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use(express.static('public'));


//Routes 
app.use('/search', searchRoutes);
app.use('/sessions', sessionsRoutes);
app.use('/profile', profileRoutes);
app.get('/', function(req, res) {
	if(!req.cookie.user){
			res.redirect('/login.html');
	} else {
		res.redirect('/');
	};

})

// app.get('/', function(req, res) {
// 	console.log('got here');
// 	// if(!req.cookie.user){
// 	// 	console.log('got here');
// 	// 	res.redirect('/login.html');

// 	// } else {
// 	// 	res.redirect('/loggedin.html');            

// 	// }
// });

app.get('/login', function(req, res) {
	res.render('login.html');
})

app.listen(3000, function(){
  console.log('Ready on Port 3000');
});

