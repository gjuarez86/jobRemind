var React = require('react');

module.exports = React.createClass({
	render: function() {
		return(
			<div>
				<form action='/sessions/logOut' method='post'>
          			<button>Log Out</button>
    			</form>
			</div>
		)
	}
});