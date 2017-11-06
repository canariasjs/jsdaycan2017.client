import React, { Component } from 'react';
import MovieForm from '../movieForm/movieForm';
import { Button } from 'react-bootstrap';
import './movieDetails.css';

// Apollo - GraphQL
import { graphql, compose, withApollo } from 'react-apollo';
import { movieById } from '../../queries/movies';
import { deleteMovie} from '../../mutations/movies';


class MovieDetails extends Component {
  constructor(props){
    super(props);
    this.state = props.location.state;
  }

  open = () => this.setState({ showModal: true });
  close = () => this.setState({ showModal: false });

  // Ejecuta la mutation deleteMovie y luego nos movemos a la ruta /movies 
  delete = id => {
    this.props.deleteMovie(id);
    this.props.history.push("/movies");
  }

  render() {
    if (this.props.data.loading) return <div>Loading</div>;
    const movie = this.props.data.moviesById[0];

    return (
      <div className="movieDetails">     
        <div className="actionButtons">
          <Button bsStyle="primary" onClick={this.open}> Edit </Button>
          {/* 
            Es importante llamar el onClick mediante una funcion que llame al this.delete
            ya que si no lo hacemos, al renderizarse el componente ejecutará el this.delete borrando la película y produciendo
            un comportamiento inesperado
          */}
          <Button bsStyle="warning" onClick={() => this.delete(movie.id)}> Delete </Button>
        </div>
        <img src={movie.poster_image} alt="Poster" width="80px" height="auto" />
        <h4> {movie.title} </h4>
        <p> {movie.description} </p> 
        <MovieForm show={this.state.showModal} movie={movie} onHide={this.close} />
      </div>
    );
  }
}

const deleteMovieMutation = graphql(deleteMovie, {
  props: ({ mutate }) => ({
    deleteMovie: (id) =>
      mutate({
        variables: { id }
      }),
  }),
  options: {
    refetchQueries: [
      'allMovies',
    ],
  },
});

export default compose(
  graphql(
    movieById, {
      options: (props) => ({
        variables: { id: props.match.params.movieId },
      }),
  }),
  deleteMovieMutation,
  withApollo,
)(MovieDetails)