import React, { Component } from 'react';

class List extends Component {

  render() {
		const { id, onToggle, label, done, onDelete} = this.props;
		return (
			<li data-id={id} className='list'>
				<input type='checkbox' className='toggle' onClick={onToggle} data-id={id} checked={done} />
				<label className='todo'>{label}</label> 
				<button onClick={onDelete} data-id={id} className='deleteToDo'>X</button>
			</li>
		);
	}
}

export default List;