import React, { Component } from 'react';
import './App.css';
import Card from './card.js'
import Header from './Header'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies : []
    }
  }

  componentWillMount() {
    fetch('https://yts.am/api/v2/list_movies.json')
    .then(res => res.json())
    .then(movie => this.setState({
      movies : movie.data.movies
    }));
  }
  render() {
    const {title_english, medium_cover_image } = this.props;
    return (
      <div className="App">
         <Header />
         {/* <HeroSection /> */}
        <div className="card-wrapper">
        {
          this.state.movies.map(movie => <Card title={movie.title_english} 
          src={movie.medium_cover_image} />)
        }
        </div>        
      </div>
    );
  }
}

export default App;
