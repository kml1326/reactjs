import React, { Component } from 'react';
import List from './List';

class ToDoLists extends Component {

  render() {
		const {Array, onToggle, onDelete, onAllTodo, onActiveTodo, onCompletedTodo} = this.props;
		if(Array.length === 0) {
			return	<ul></ul> ;
		} else
		return (
			<ul className='list-of-todo'>
				{Array.map((data, i) => (
					<List key={i}
					 label={data.value} 
					 done = {data.done}
					 id = {i} 
					 onToggle = {onToggle} 
					 onDelete = {onDelete}
					/>
				))}
				<footer>
				<p className='todo-details'>
					<span>
						<span className='left-todo'>{Array.filter(todo => todo.done === false).length}</span>
						item left
					</span>
					<span>
						<button onClick={onAllTodo}>All</button>
						<button onClick={onActiveTodo}>Active</button>
						<button onClick={onCompletedTodo}>Completed</button>
					</span>
					<span className='clear-todo'>Clear completed</span>
				</p>
				<p className='bottom style1'></p>
				<p className='bottom style2'></p>
				</footer>
			</ul>
		);
	}

}

export default ToDoLists;