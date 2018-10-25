import React, { Component } from 'react';

class Items extends Component {
  render() {
		return (
			<div className='item'>
				<span className='font-style'>{this.props.fontFamily}</span>
				<p className={`text ${this.props.type}`}> { this.props.value } </p>
			</div>
		);
	} 
}

export default Items;