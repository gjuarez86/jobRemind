var React = require('react');
var fetch = require('isomorphic-fetch');
var serialize = require('form-serialize');
var Profiles = require('../Profile/ProfileContent');
var EditProfile = require('../Profile/EditProfile');
module.exports = React.createClass({
	getInitialState: function() {
		return {
			profile: []
		}
	},

	componentDidMount: function() {
		var that = this;
			fetch('/profile')
	        .then(function(res) {return res.json()})
	        .then(function(profile) {
	        	that.setState({profile: that.state.profile.concat(profile)});
	        });	
	},

	render: function() {
		var profile = this.state.profile !== null ? <Profiles profile={this.state.profile}/> : 
			<EditProfile submitHandler={this.submitHandler}/>
		return(
			<div>
				<h1>Profile</h1>
				{profile}
			</div>
		)
	},

	submitHandler: function(event) {
		event.preventDefault();
		var that = this;

		var data = serialize(event.target, {hash: true});

		fetch('/profile/edit', {
         method: 'post',
         headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
         },
          body: JSON.stringify(data)
        })
        .then(function(res) {return res.json();})
        .then(function(profile) {that.setState({profile: that.state.profile.concat(profile)})})

    }
});