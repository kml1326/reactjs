import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
			<footer>
				<p className='todo-details'>
					<span>
						<span className='left-todo'>{this.props.toDoArray.filter(todo => todo.done === false).length}</span>
						item left
					</span>
					<span>
						<button onClick={this.props.onAllTodo}>All</button>
						<button onClick={this.props.onActiveTodo}>Active</button>
						<button onClick={this.props.onCompletedTodo}>Completed</button>
					</span>
					<span className='clear-todo' onClick={this.props.handleClearComplete}>Clear completed</span>
				</p>
				<p className='bottom style1'></p>
				<p className='bottom style2'></p>
			</footer>	
		);
	}
}

export default Footer;