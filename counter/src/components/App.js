import React, { Component } from 'react';
import NavBar from './NavBar';
import Counters from './counters';
import { PDFViewer } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
import Pdf from './Pdf';

class App extends Component {
	constructor() {
		super();
		this.state = {
			counters: [
				{ id: 1, value: 4 },
				{ id: 2, value: 0 },
				{ id: 3, value: 0 },
				{ id: 4, value: 0 }
			]
		}
	}

	
	handleIncrement = counter => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter };
		counters[index].value++;
		this.setState({ counters });
	};

	handleReset = () => {
		const counters = this.state.counters.map(c => {
			c.value = 0;
			return c;
		});
		this.setState({ counters });
	};

	handleDelete = counterId => {
		const counters = this.state.counters.filter(c => c.id !== counterId);
		this.setState({ counters });
	};

	handleClick = () => {
		ReactPDF.render(<Pdf />, `../components/ex.pdf`);
	}

	render() {
		return (
			<div>
				{/* <NavBar 
					totalCounters={this.state.counters.filter(c => c.value > 0 ).length}
				/>
				<Counters
					counters={this.state.counters}
					onReset={this.handleReset} 
					onIncrement={this.handleIncrement} 
					onDelete={this.handleDelete}
				/> */}
				<PDFViewer>
					<Pdf />
				</PDFViewer>
				<button onClick={this.handleClick}>Click here</button>
			</div>
		);
	}
}

export default App;