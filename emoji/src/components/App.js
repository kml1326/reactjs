import React, { Component } from 'react';
import '../styles/App.scss';
import data from '../data.json'
import { ListOfEmojiList } from './ListOfEmojiList';
import { Heading, SearchBox } from './Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: data
    }
    this.onSearch = this.onSearch.bind(this);
  }
  onSearch(e){
    var filteredData = data.filter(v => v.keywords.includes(e.target.value));
    this.setState({
      data: filteredData
    })
  }
  render() {
    return (
      <div className="App">
        <Heading />
        <SearchBox onSearch={this.onSearch} />
        <ListOfEmojiList dataArray={this.state.data} />
      </div>
    );
  }
}

export default App;
