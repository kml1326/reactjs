import React, { Component } from 'react';
import '../styles/App.scss';
import { MainSection } from './MainSection';
import { Heading, SearchBox } from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <SearchBox />
        <MainSection />
      </div>
    );
  }
}

export default App;
