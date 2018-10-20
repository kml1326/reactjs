import React, { Component } from 'react';
import './Button.sass'


class Button extends Component {
	render() {
		return (
			<button className={`btn ${this.props.type}`}>{this.props.label}</button>
		);
	}
}

export default Button;