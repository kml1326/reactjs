import React, { Component } from 'react';
import './App.css';

// class App extends Component {

//   render() {
//     function handleClick(e) {
//       e.preventDefault();
//       console.log('The link was clicked.');
//     }
//     return (
//       <div className="App">
//         <button onclick={handleClick}>
//           Click me
//         </button>
//       </div>
//     );
//   }
// }

// class LoggingButton extends Component {
//   // This syntax ensures `this` is bound within handleClick.
//   // Warning: this is *experimental* syntax.
//   handleClick = () => {
//     console.log('this is:', this);
//   }

//   render() {
//     return (
//       <button onClick={(e) => this.handleClick(e)}>
//         Click me
//       </button>
//     );
//   }
// }


// export default LoggingButton;



export default class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

