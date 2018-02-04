import React, { Component} from 'react';
import PropTypes from 'prop-types';   // npm install prop-types
import './Movie.css';

class Movie extends Component {
  render() {
      return(
        <div>
            <MoviePoster poster={this.props.poster} />
            <h1>{this.props.title}</h1>
        </div>
      )
  }
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
}

class MoviePoster extends Component {
  render() {
    return (
      <img src={this.props.poster}/>
    )
  }
}
export default Movie
