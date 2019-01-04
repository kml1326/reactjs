import React, { Component } from 'react';

class App extends Component {
  state = {
    red : 21,
    green: 210,
    blue : 210
  }

  handleUpdate = (e) => {
    console.log(e.target.id, e.target.name)
    this.setState({
      [e.target.id] : e.target.value
    })
   
  }
  render() {
    document.body.style = `background: rgb(${this.state.red}, ${this.state.green}, ${this.state.blue});`;
    
    return (
      
      <div className="App"> 
        <p>R : <input id='red' type='range' name='red' min='0' max='255' value={this.state.red} onChange={this.handleUpdate} /> {this.state.red}</p>
        <p>G : <input id='green' type='range' name='green' min='0' max='255' value={this.state.green} onChange={this.handleUpdate} /> {this.state.green}</p>
        <p>B : <input id='blue' type='range' name='blue' min='0' max='255' value={this.state.blue} onChange={this.handleUpdate} /> {this.state.blue}</p>
      </div>
    );
  }
}

export default App;
