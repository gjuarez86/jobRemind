var React = require('react');
var LogOut = require('../Components/LogOut');
var Nav = require('./Nav');

module.exports = React.createClass({
	render: function() {
		var logOut = document.cookie !== '' ? <LogOut/> : false	;
		var name = document.cookie !== '' ? document.cookie.name : 'no name';

		return(
			<div>
				{name}
				{logOut}
				<Nav/>
				{this.props.children}
			</div>
		)
	}
});