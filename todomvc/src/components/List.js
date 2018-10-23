import React, { Component } from 'react';

class List extends Component {
  render() {
		const { id, onToggle, label, onDelete } = this.props;
		return (
			<li id={id}>
				<input type='checkbox' onClick={onToggle} id={id} />
				{label}
				<button onClick={() => onDelete(id)} id={id}>X</button>
			</li>
		);
	}
}

export default List;