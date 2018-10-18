import React, { Component } from 'react';
import './App.scss'

class Signup extends Component {
	render() {
		return (
			<div className="signup left">
				<p className="header">Sign up</p>
				<input type="email" name="email" placeholder="Mobile number or Email"></input>
				<input type="text" name="name" placeholder="Full name"></input>
				<input type="text" name="username" placeholder="Username"></input>
				<input type="password" name="password" placeholder="Password"></input>
				<button className="btn">Sign up</button>
				<p className="desc">Login With facebook</p>
			</div>
		);
	}
}

export default Signup;