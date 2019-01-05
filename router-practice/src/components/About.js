import React, { Component } from 'react'

export default class About extends Component {

  handlClick = () => {
    console.log(this.props, "props in about");
    this.props.history.push('/');
  }
  
  render() {
    return (

      <div>
        <button onClick={this.handlClick}>Back</button>
        <h1>About Page</h1>
      </div>
    )
  }
}
