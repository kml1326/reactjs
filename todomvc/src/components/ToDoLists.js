import React, { Component } from 'react';
import List from './List';

class ToDoLists extends Component {
  render() {
		const {Array, onToggle, onDelete} = this.props;
		return (
			<ul>
				{Array.map((data, i) => (
					<List key={i}
					 label={data.value} 
					 id = {i} 
					 onToggle = {onToggle} 
					 onDelete = {onDelete}
					/>
				))}
			</ul>
		);
	}

}

export default ToDoLists;