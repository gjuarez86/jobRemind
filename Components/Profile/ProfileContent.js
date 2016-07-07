var React = require('react');
module.exports = React.createClass({
	render: function() {
		return(
			<div id='profile-container'>
				{this.props.profile.map(function(profile){
					return(
					<div>
						<ul key={profile._id}>
							<li>Name: {profile.name}</li>
							<li>Age: {profile.age}</li>
							<li>Food: {profile.food}</li>
							<li>Picture: {profile.picture}</li>
						</ul>
					</div>
					)
				})}
			</div>
		)
	}
});