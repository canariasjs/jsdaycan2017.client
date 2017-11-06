import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Glyphicon} from 'react-bootstrap';
import './movies.css';

import MovieForm from '../movieForm/movieForm';
import { MovieItem } from '../../components/movieItem/movieItem';

import { graphql } from 'react-apollo';
import { allMovies } from '../../queries/movies';

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

    if (this.props.data.loading) return <div>Loading</div>;

    return (
      <div className="moviesContainer">
        <Button className="baseButton" onClick={this.open}>
          <Glyphicon glyph="pencil" className="new" /> New movie 
        </Button>
        <div className="list">
          { 
            this.props.data.allMovies.map((movie, i) => 
              <Link className="movieItem" key={i} to={{ pathname: `/movies/${movie.id}`, state: { movie } }}>
                <MovieItem 
                  title={movie.title} 
                  poster_image={movie.poster_image}
                  rating={movie.rating}
                />
              </Link>
            ) 
          }
                    { 
            this.props.data.allMovies.map((movie, i) => 
              <Link className="movieItem" key={i} to={{ pathname: `/movies/${movie.id}`, state: { movie } }}>
                <MovieItem 
                  title={movie.title} 
                  poster_image={movie.poster_image}
                  rating={movie.rating}
                />
              </Link>
            ) 
          }
        </div>
        <MovieForm show={this.state.showModal} onHide={this.close} />
      </div>
    );
  }
}

// Exportamos el container Movies pero ahora envuelto en un HOC que le inyecta
// los datos recibidos del server GraphQL
export default graphql(allMovies)(Movies);
