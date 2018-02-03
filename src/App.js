import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title: "Matrix",
    poster: "http://bit.ly/2BRK75w"
  },
  {
    title: "Greatest ShowMan",
    poster: "http://bit.ly/2BQiB8I"
  },
  {
    title: "OldBoy",
    poster: "http://bit.ly/2nuFdaA"
  },
  {
    title: "Star Wars",
    poster: "http://bit.ly/2BR24S1"
  },
  {
    title: "CoCo",
    poster: "http://bit.ly/2nuFwCg"
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map(movie => {
          return <Movie title={movie.title} poster={movie.poster}/>
        })}
      </div>
    );
  }
}


export default App;
