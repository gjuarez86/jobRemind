var router = require('express').Router();
var Users = require('../Models/user');
var bcrypt = require('bcrypt');
var React = require('react');
var ReactDomServer = require('react-dom/server');

router.post('/signup', function(req, res){
	var saltRounds = 10
	var salt = bcrypt.genSaltSync(saltRounds);
	var hash = bcrypt.hashSync(req.body.password, salt);
	Users.create({username: req.body.username, password: hash});
	res.redirect('/loggedin.html');
});

router.post('/login', function(req, res){
	Users.findOne({username: req.body.username}, function(err, user){
		if(bcrypt.compareSync(req.body.password, user.password)){
			res.redirect('/loggedin.html')

		} else {
			console.log('Wrong password. Or Not Signed up')
		};
	})

});

module.exports = router;
