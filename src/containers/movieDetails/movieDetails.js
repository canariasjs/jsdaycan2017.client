import React, { Component } from 'react';
import MovieForm from '../movieForm/movieForm';
import { Button } from 'react-bootstrap';
import './movieDetails.css';

// Apollo - GraphQL
import { graphql } from 'react-apollo';
import { movieById } from '../../queries/movies';


class MovieDetails extends Component {
  constructor(props){
    super(props);
    this.state = props.location.state;
  }

  open = () => this.setState({ showModal: true });
  close = () => this.setState({ showModal: false });

  render() {
    if (this.props.data.loading) return <div>Loading</div>;
    const movie = this.props.data.moviesById[0];

    return (
      <div className="movieDetails">     
        <div className="actionButtons">
          <Button bsStyle="primary" onClick={this.open}> Edit </Button>
          <Button bsStyle="warning"> Delete </Button>
        </div>
        <img src={movie.poster_image} alt="Poster" width="80px" height="auto" />
        <h4> {movie.title} </h4>
        <p> {movie.description} </p> 
        <MovieForm show={this.state.showModal} movie={movie} onHide={this.close} />
      </div>
    );
  }
}

// A la hora de hacer la petición al server, le pasaremos el id de la película que queremos obtener.
// Este valor lo obtenemos desde el router
export default graphql(
  movieById, {
    options: (props) => ({
      variables: { id: props.match.params.movieId },
    }),
  })
  (MovieDetails);