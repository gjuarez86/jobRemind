var express = require('express');
var app = express();
var cheerio = require('cheerio');
var request = require('request');
var fs = require('fs');
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
			var title = null;
			var json = {title : ""};
			$('#titletextonly').filter(function(){
				var data = $(this);
				title = data.text();
				console.log(title);
				json.title = title;
			})

			fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){
				console.log('File successfully written! - Check your project directory for the output.json file');
			});
		}
	})
	setInterval(recursive, 2000);
};
app.get('/scrape', recursive);

app.post('/search', function(req, res) {
	res.send('hello search');
})

app.listen(3000, function(){
  console.log('Ready on Port 3000');
});

