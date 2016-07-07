var React = require('react');
var Link = require('react-router').Link;
var About = require('../Components/About');
var Contact = require('../Components/Contact');
var Home = require('../Components/Home');
var Search = require('../Components/Search');
var UserProfile = require('../Components/Profile/UserProfile');

module.exports = React.createClass({
	render: function() {
		var profileLink = true ? <Link to={'/userProfile'}>Profile</Link> : false
		return(
			<div> 
				 <Link to={'/'}>Home</Link>
				 <Link to={'/about'}>About</Link>
				 <Link to={'/search'}>Search</Link>
				 <Link to={'/contact'}>Contact</Link>
				 {profileLink}
			</div>
		)
	}
});