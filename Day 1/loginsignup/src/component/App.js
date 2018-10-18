import React, { Component } from 'react';
import Login from './Signup';
import Signup from './Login';

class App extends Component {
  render() {
    return (
      <div>
        <Login />
        <Signup />
      </div>
    );
  }
}

export default App;
