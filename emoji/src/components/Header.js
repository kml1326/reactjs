import React, { Component } from 'react';
import logo1 from '../media/search-emoji.png'
import logo2 from '../media/search-emoji2.png'

export class Heading extends Component {

  render() {
		return (
			<h1 className='header'>
				<img src={logo1} alt='search-emoji' />
				Emoji Search
				<img src={logo2} alt='search-emoji' />
			</h1>
		);
	}
}


export class SearchBox extends Component {

	render() {
		return (
			<input type='text' className='search-input'  onChange={this.props.onSearch}/>
		);
}

}