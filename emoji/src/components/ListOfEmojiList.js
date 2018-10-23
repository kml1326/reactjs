import React, { Component } from 'react';
import '../styles/App.scss';



class List extends Component {

	render() {
		return (
			<li className='list'>
				<span className='symbol'> {this.props.symbol} </span>
				<span className='title'> {this.props.title} </span>
			</li>
		);
	}
}


export class ListOfEmojiList extends Component {

	render() {
		const dataobj = this.props.dataArray;
		return (
			<ul>
				{dataobj.map((object, id) => 
					<List key={id} title={object.title} symbol={object.symbol} />
					)}																																															
			</ul>
		);		
	}
}

