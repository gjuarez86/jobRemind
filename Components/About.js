var React = require('react');

module.exports = React.createClass({
	render: function() {
		return(
			<div>	
				<h1>Welcome to JobRemind {this.props.user}</h1>
				<p>We offer fresh job postings. You can now track new jobs on craigslist using the JobRemind WebApp. You can even apply with one click.</p>
			</div>
		)
	}
});