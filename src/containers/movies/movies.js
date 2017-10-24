import React, { Component } from 'react';
import './movies.css';

import MoviesData from './films.json';

import { MovieItem } from '../../components/movieItem/movieItem';

class Movies extends Component {
  render() {
    return (
      <div className="moviesContainer">
        {
          MoviesData.data.allMovies.map((movie, i) =>
            <MovieItem 
              key={i}
              title={movie.title} 
              poster_image={movie.poster_image}
              rating={movie.rating}
            />
          ) 
        }
      </div>
    );
  }
}

export default Movies;


/* 
// SOLUCIÓN

import React from 'react';

export const MovieItem = props =>
  <div>
    <p> Titulo:  {props.title} </p>
  </div>
*/