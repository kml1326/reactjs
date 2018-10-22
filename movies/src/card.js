import React, { Component } from 'react';
import './App.scss'

class Card extends Component {

  render() {
		return (
			<div className="card">
				<img src={this.props.src} alt={this.props.title} className='card-img' />
				<p className='card-title'>{this.props.title}</p>
				<button className='btn'onClick={console.log('click on download')}>Download</button>
				<button className='watch-trailer-btn btn'>Watch Trailer</button>
			</div>
		);
	}
}

export default Card