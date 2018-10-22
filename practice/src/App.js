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

class LoggingButton extends Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={(e) => this.handleClick(e)}>
        Click me
      </button>
    );
  }
}


export default LoggingButton;
