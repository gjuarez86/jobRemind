var express = require('express');
var app = express();
var cheerio = require('cheerio');
var request = require('request');
var fs = require('fs');
// Twilio Credentials 
var accountSid = 'ACf2c336e0b36ace88e3b0308f0ebf0a59'; 
var authToken = '2a38f364bc92c90dad926e1a279a3181'; 
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/jobRemind');


app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('index');
});
//Scrape-----------------------------------------------------------
var oldTitle = null;

var recursive = function(req, res) {
	url = 'https://losangeles.craigslist.org/search/jjj';
	request(url, function(error, response, html){
		if(!error){
			var $ = cheerio.load(html);
			var newTitle = oldTitle;
			var json = {title : ""};
			$('#titletextonly').filter(function(){
				var data = $(this);
				oldTitle = data.text();
				// console.log(oldTitle);
				json.title = oldTitle;
			})
			if((oldTitle !== newTitle)) {
				client.sms.messages.create({ 
				    to: "+13107353047", 
				    from: "+15005550006",
				    body: json.title
				}, function(err, message) { 
				    console.log('Sent from your twilio account -' + message.body); 
				});
			};

			fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){
				// console.log('File successfully written! - Check your project directory for the output.json file');
			});
		}
	})
	setInterval(recursive, 60000);
};
app.get('/scrape', recursive);

app.post('/search', function(req, res) {
	res.send('hello search');
})

app.listen(3000, function(){
  console.log('Ready on Port 3000');
});

