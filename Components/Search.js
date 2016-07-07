var React = require('react');

module.exports = React.createClass({
	render: function() {
		return(
			<div>	
				<h1>Search for a new Job Posting</h1>
				<form action='/scrape' method='get'>
					<button>Find a Job</button>
				</form>
			</div>
		)
	}
});