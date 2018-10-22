import React, { Component } from 'react';
import data from '../data.json'
import '../styles/App.scss';



class List extends Component{

	render() {
		return (
			<li className='list'>
				<span className='symbol'> {this.props.symbol} </span>
				<span className='title'> {this.props.title} </span>
			</li>
		);
	}
}


export class MainSection extends Component {

	render() {
		return (
			<ul>
				{data.map( (object, id) => 
					<List key={id} title={object.title} symbol={object.symbol} />
					)}
			</ul>
		);		
	}
}

