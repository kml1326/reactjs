import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {


  render() {
    console.log(this.props, "props in home")
    return (
      <div>
        <h1>Home Page</h1>
        <ul>
          <li>
            <Link to='/' >Home</Link>
          </li>
          <li>
            <Link to='/about' >About</Link>
          </li>
          <li>
            <Link to='/contact' >Contact</Link>
          </li>
        </ul>
      </div>
    )
  }
}
