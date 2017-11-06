import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './movies.css';

import MoviesData from './films.json';

import { MovieItem } from '../../components/movieItem/movieItem';

class Movies extends Component {

  constructor(props){
    super(props);
    this.state = {
      showModal: false,
    }
  }

  open = () => this.setState({ showModal: true });
  close = () => this.setState({ showModal: false });

  render() {

    return (

        <div className="moviesContainer">
          <Button bsStyle="primary" onClick={this.open}> New movie </Button>
          {
            MoviesData.data.allMovies.map((movie, i) => 
            <Link  key={i} to={{ pathname: `/movies/${movie.id}`, state: { movie } }}>
              <MovieItem 
                title={movie.title} 
                poster_image={movie.poster_image}
                rating={movie.rating}
              />
            </Link>
            ) 
          }
        </div>
    );
  }
}

export default Movies;
