var React = require('react');
var Link = require('react-router').Link;
var About = require('../Components/About');
var Contact = require('../Components/Contact');
var Home = require('../Components/Home');

module.exports = React.createClass({
	render: function() {
		return(
			<div> 
				 <Link to={'/'}>Home</Link>
				 <Link to={'/about'}>About</Link>
				 <Link to={'/contact'}>Contact</Link>
			</div>
		)
	}
});