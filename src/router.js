import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
// Component
import Header from './components/header/header';

// Containers
import Movies from './containers/movies/movies';
import MovieDetails from './containers/movieDetails/movieDetails';

class Router extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={Movies}/>
            <Route exact path='/movies' component={Movies}/>
            <Route exact path="/movies/:movieId" component={MovieDetails}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default Router;
