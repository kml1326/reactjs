import React, { Component } from 'react';
import './App.scss';

class App extends Component {

  handleUpdate = (e) => {
    console.log(e)
  }
  render() {
    return (
      <div className="App">
      <label for='red'></label>
       <input id='red' type='range' name='red' min='0' max='255' value='10' onChange={this.handleUpdate} />
       <input id='green' type='range' name='green' min='0' max='255' value='10' onChange={this.handleUpdate} />
       <input id='blue' type='range' name='blue' min='0' max='255' value='10' onChange={this.handleUpdate} />
      </div>
    );
  }
}

export default App;
