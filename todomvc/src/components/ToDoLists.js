import React, { Component } from 'react';
import List from './List';
import Footer from './Footer';

class ToDoLists extends Component {

  render() {
		const {array, toDoArray, onToggle, onDelete, onAllTodo, onActiveTodo, onCompletedTodo, activeTab, handleClearComplete} = this.props;
		if(toDoArray.length === 0) {
			return	<div></div> ;
		} else
		return (
			<ul className='list-of-todo'>

				{array.map((data, i) => (

					<List key={i}
					 label={data.value} 
					 done = {data.done}
					 id = {i} 
					 onToggle = {onToggle} 
					 onDelete = {onDelete}
					/>
				))}

				<Footer 
					array = { array }
					onAllTodo = { onAllTodo }
					onActiveTodo = { onActiveTodo }
					onCompletedTodo = { onCompletedTodo }
					activeTab = { activeTab }
					handleClearComplete = { handleClearComplete }
				/>

			</ul>
		);
	}

}

export default ToDoLists;