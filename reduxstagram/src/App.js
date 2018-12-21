import React, { Component } from 'react';
import BrowserRouter from 'react-router-dom/BrowserRouter'
import './App.css';
import Main from '../src/components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

import { Router, Route, IndexRoute, browserHistory } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main> 
            <p>hello</p> 
          </Main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
