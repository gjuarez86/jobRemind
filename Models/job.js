var mongoose = require('mongoose');

var jobSchema = mongoose.Schema({
	username: String,
	job: String,
	applied: String
}); 

module.exports = mongoose.model('Jobs', jobSchema);