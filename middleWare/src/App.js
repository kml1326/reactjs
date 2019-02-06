import React, { Component } from 'react';
import './App.css';
import { showArticles } from './actions/action';
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount = () => {
    this.props.dispatch(showArticles());
  }
  render() {
    return (
      <div className="App">

      {
        this.props.articles ? (
        this.props.articles.map((article, i) => {
          return <li key={i}>{article.title}</li>
        })) : <div></div>
      }
        
      </div>
    );
  }
}

function mapState(state) {
  return {
    articles: state
  }
}

export default connect(mapState)(App);
