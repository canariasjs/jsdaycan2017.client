import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './movies.css';

import MovieForm from '../movieForm/movieForm';
import { MovieItem } from '../../components/movieItem/movieItem';

// Herramientas del cliente apollo para conectar con el server
import { graphql, compose, withApollo } from 'react-apollo';
// Query que queremos ejecutar
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

    if (this.props.data.loading) {
      return (<div>Loading</div>)
    } 

    return (

        <div className="moviesContainer">
          <Button bsStyle="primary" onClick={this.open}> New movie </Button>
          { 
            // Ahora no usaremos los datos mockeados, sino allMovies procendente del GraphQL Server
            this.props.data.allMovies.map((movie, i) => 
            <Link  key={i} to={{ pathname: `/movies/${movie.id}`, state: { movie } }}>
              <MovieItem 
                title={movie.title} 
                poster_image={movie.poster_image}
                rating={movie.rating}
              />
            </Link>
            ) 
          }
          <MovieForm show={this.state.showModal} onHide={this.close} />
        </div>
    );
  }
}

// Exportamos el container Movies pero ahora envuelto en un HOC que le inyecta
// los datos recibidos del server GraphQL
export default graphql(allMovies)(Movies);
