var router = require('express').Router();
var Users = require('../Models/user');


router.post('/login', function(req, res){
	Users.create(req.body);
	console.log('got it');
});


module.exports = router;