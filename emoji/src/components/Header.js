import React, { Component } from 'react';
import data from '../data.json'

export class Heading extends Component {

  render() {
		return (
			<h1>Emoji Search</h1>
		);
	}
}


export class SearchBox extends Component {

	searchEmoji() {
		console.log('this is:', this);
	}

	render() {
		return (
			<input type='text' className='input'  onKeyDown={this.searchEmoji}/>
		);
}

}