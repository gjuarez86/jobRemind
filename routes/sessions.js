
require('babel-register')({
  presets:['react']
});
var router = require('express').Router();
var Users = require('../Models/user');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var About = require('../Components/About');
var Profile = require('../Models/profiledb');

router.post('/signup', function(req, res){
	var saltRounds = 10
	var salt = bcrypt.genSaltSync(saltRounds);
	var hash = bcrypt.hashSync(req.body.password, salt);
	Users.create({username: req.body.username, password: hash}, function(err, user){
		Profile.create({userId: user._id}, function(err, profile){console.log('profile created')});
		var token = jwt.sign(user, 'secret');
		res.cookie('user', token);
		res.redirect('/');
	});
});

router.get('/signup', function(req, res) {
	console.log('got here');
  Users.find(function(err, users) {
  	console.log(users);
    res.send(users);
  });
});


router.post('/login', function(req, res){
	Users.findOne({username: req.body.username}, function(err, user){
		if(bcrypt.compareSync(req.body.password, user.password)){
			var user = req.body.username;
			res.cookie('user', jwt.sign(user, 'secret'));
			// console.log(req.cookies.user.username);
			// var html = ReactDOMServer.renderToString(
			// 	React.createElement(About)
			// )
			res.redirect('/');
		} 
	})

});

router.post('/logout', function(req, res){
	res.clearCookie('user');
	res.redirect('/login.html');
});
module.exports = router;
