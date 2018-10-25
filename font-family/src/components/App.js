import React, { Component } from 'react';
import '../styles/App.scss';
import Items from './Items'

class FontApp extends Component {
  state = { value : '' };

  handleChange = (e) => {
    this.setState( { value : e.target.value } )
  }
  render() {
    return (
      <div className="container">
        <input onChange={ this.handleChange } className='text-input'></input>
        <Items value = { this.state.value } fontFamily = 'Karla' type='karla' />
        <Items value = { this.state.value } fontFamily = 'Helvetica Neue' type='helvetica-neue' />
        <Items value = { this.state.value } fontFamily = 'Bree Serif' type='bree-serif' />
        <Items value = { this.state.value } fontFamily = 'Lato' type='lato' />
        <Items value = { this.state.value } fontFamily = 'Cabin' type='cabin' />
        <Items value = { this.state.value } fontFamily = 'Proxima Nova' type='proxima-nova' />
        <Items value = { this.state.value } fontFamily = 'Andale Mono' type='andale-mono' />
      </div>
    );
  }
}

export default FontApp;
