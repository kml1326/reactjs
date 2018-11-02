import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Error from './components/Error';


class App extends Component {

    state = {
      userInput: '',
      data : {},
      error : '',
      isLoading : false
    }      
      // let icon = object.weather[0].icon;
      // // return (`${object.name}, ${object.weather[0].description}<img class="weather-icon" 
      // // src="http://openweathermap.org/img/w/${icon}.png">${parseInt(tempCel)}&#176 C`;)       

  handleChanges = (e) => {
    this.setState({userInput : e.target.value})
    
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let apiKey = 'b20156877d92ec0e892a415edb752569';
    this.setState({ isLoading : true });
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.userInput}&appid=${apiKey}`)
      .then(res => res.json())
      .then(object =>
        {if(object.message) {this.setState({
          error : 'No Internet',
          isLoading : false
        })} else
        this.setState({
          data : object,
          isLoading : false
        })}
      ) 
  }

  render() {
    return (

      // <BrowserRouter>
      //  <div>
      //   <Route path="/" Component={Home} exact />
      //   <Route path="/about" Component={About} />
      //   <Route Component={Error} />
      //  </div>
      // </BrowserRouter>
      <div className="App">
        <section className='header'>
          <h1 className='wrapper'>
            <span className='logo-box'>
            <i className="fas fa-cloud-sun logo"></i>
            </span>
            <form onSubmit={this.handleSubmit} className='form'>
              <input type='text' onChange={ this.handleChanges } className='searchBox' placeholder='&#61442;   Search City Weather' />     
            </form>
            <span className='logo-box'>
            <i className="fas fa-cloud-moon logo"></i>
            </span>
            </h1>
        </section>
        <h2 className='spinner'>
          { this.state.isLoading 
          ? <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          : '' }   
        </h2>
        { this.state.error   
          ? <div>{this.state.error}</div>
          :  
            (Object.keys(this.state.data).length) ?
              <div className='wrapper'>
                <table>
                  <tbody>
                    <tr>
                      <td className='title'>Place :</td>
                      <td>{this.state.data.name}</td>
                    </tr>
                    <tr>
                    <td className='title'>Weather :</td>
                    <td>{this.state.data.weather[0].description}</td>
                    </tr>
                    <tr>
                      <td className='title'>Temp :</td>
                      <td>{parseInt(this.state.data.main.temp - 273.15)} &deg; C</td>
                    </tr>
                    <tr>
                      <td className='title'>Min Temp :</td>
                      <td>{parseInt(this.state.data.main.temp_min - 273.15)} &deg; C</td>
                    </tr>
                    <tr>
                      <td className='title'>Max Temp :</td>
                      <td>{parseInt(this.state.data.main.temp_max - 273.15)} &deg; C</td>
                    </tr>
                  </tbody>
                </table>
              </div>
        : <div></div> }
      </div>
    );
  }
}

export default App;
