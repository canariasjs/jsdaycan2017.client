import React, { Component } from 'react';
import './movies.scss';

import { MovieItem } from '../../components/movieItem/movieItem';

class Movies extends Component {
  render() {
    return (
      <div>
        Movies Container
        <MovieItem title="Interestellar" />
      </div>
    );
  }
}

export default Movies;