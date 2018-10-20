import React, { Component } from 'react';
import Button from './Button.js';
import './Button.sass'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button label="click" type="circle"/>
        <Button label="click" type="rectangle"/>
        <Button label="+" type="circle"/>
      </div>
    );
  }
}

export default App;
