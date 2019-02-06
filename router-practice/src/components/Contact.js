import React, { Component } from 'react'

export default class Contact extends Component {

  handlClick = () => {
    console.log(this.props.history, "props in contact");
    this.props.history.push('/');
  }
  
  render() {
    return (
      <div>
        <button onClick={this.handlClick}>Back</button>
        <h1>Contact Page</h1>
      </div>
    )
  }
}
