var React = require('react');
module.exports = React.createClass({
	render: function() {
		return(
			<div>
				<form onSubmit={this.props.submitHandler}>
					Name:<input name="name" />
					<br/>
					Age: <input name="age" />
					<br/>
					Food: <input name="food" />
					<br/>
					Picture: <input name="picture"/>
					<br/>
					<button> Ok </button>
				</form>
			</div>
		)
	}
});