var mongoose = require('mongoose');

var profileSchema = mongoose.Schema({
	userId: String,
	name: String,
	age: String,
	food: String,
	picture: String
});


module.exports = mongoose.model('profile', profileSchema);
