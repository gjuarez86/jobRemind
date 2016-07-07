var router = require('express').Router();
var Users = require('../Models/user');
var Profile = require('../Models/profiledb');

router.get('/', function(req, res){
	Profile.find(function(err, profile) {
		res.send(profile);
	});
});

router.post('/edit', function(req, res){
	Profile.create(req.body, function(err, profile){
		res.send(profile);
	});
});

module.exports = router;
// router.post('/edit', function(req, res){
// 	Profile.create({name: req.body.name, age: req.body.age, 
// 			food: req.body.food, pictue: req.body.picture}, function(err, profile){
// 		res.send(profile);
// 	});
// });