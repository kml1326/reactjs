import React, { Component } from 'react';
import './App.css'

class Card extends Component {

  render() {
		return (
			<div className="card">
				<img src={this.props.src} alt={this.props.title} />
				<p className='card-title'>{this.props.title}</p>
			</div>
		);
	}
}

export default Card