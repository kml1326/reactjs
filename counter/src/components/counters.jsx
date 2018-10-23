import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
	render() {
		const { onReset, counters, onDelete, onIncrement } = this.props;
		return (
			<div className='counters'>
				<button
					onClick={onReset}
					className='btn resetBtn'
				>
					Reset
				</button>
				{counters.map(counter => (
					<Counter 
						key={counter.id} 
						onDelete={onDelete}
						onIncrement={onIncrement} 
						counter={counter}
					/>
				))}
			</div>
		);
	}
}

export default Counters