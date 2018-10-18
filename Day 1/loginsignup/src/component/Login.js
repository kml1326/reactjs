import React, { Component } from 'react';
import './App.scss'

class Login extends Component{
	render() {
		return (
			<div className="login right">
				<p className="header capital">log in to your account</p>
				<input type="email" name="email" placeholder="Phone number, username or email address"></input>
				<input type="password" name="password" placeholder="Password"></input>
				<p className="stay-signed-block"><input type="checkbox" className="signed-checkbox"></input><label>Stay signed in</label></p>
				<button className="btn">Sign In</button>
				<p className="desc">Forgot password?</p>
			</div>
		);
	}
}

export default Login ;