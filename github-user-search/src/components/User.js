import React, { Component } from 'react';
import Repos from './Repos';
import UserInfo from './UserInfo';
import Followers from './Followers';
import '../styles/App.css'

class User extends Component {

  state = {
    userName : '',
    userData : {},
    isLoading : false,
    error : null
  }

  handleChanges = (e) => {
    this.setState({userName : e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ isLoading : true });
      fetch(`https://api.github.com/users/${this.state.userName}`)
      .then(res => res.json())
      .then(object =>
        {if(object.message) {this.setState({
          error : 'No Internet',
          isLoading : false
        })} else
        this.setState({
          userData : object,
          isLoading : false
        })}
      )      
  }

  render() {
    return (
      <div className="App">
        <section className='header'>
          <h1 className='wrapper'>
            <span className='logo'>
            <i className="fab fa-github"></i>
            </span>
            <form onSubmit={this.handleSubmit} className='form'>
              <input type='text' onChange={ this.handleChanges } className='searchBox' placeholder='&#61442;   Search User' />     
            </form>
            { this.state.isLoading 
              ? <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
              : '' }   
          </h1>
        </section>
        { this.state.error   
          ? <div>{this.state.error}</div>
          :  
            (Object.keys(this.state.userData).length) ?
              <div className='wrapper'>
                <div className='container'>
                  <UserInfo data={ this.state.userData } />
                  <Repos data={ this.state.userData } />
                  <Followers data={ this.state.userData } />
                </div>
              </div>
            : <div></div> }
      </div>
    );
  }
}

export default User;
