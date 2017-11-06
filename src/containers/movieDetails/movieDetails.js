import React, { Component } from 'react';
import MovieForm from '../movieForm/movieForm';
import { Button, Glyphicon } from 'react-bootstrap';
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
        <Button className="baseButton" onClick={this.open}> 
          <Glyphicon glyph="edit" className="edit" /> Edit 
        </Button>
        <Button className="baseButton" onClick={() => this.delete(movie.id)}> 
          <Glyphicon glyph="trash" className="delete" /> Delete 
        </Button>
        <div className="movieContainer">
          <img src={movie.poster_image} alt="Poster" width="300px" height="100%" />
          <div className="movieData">
            <h4> {movie.title} </h4>       
            <h5> {movie.year} </h5>
            <p> Rating: {movie.rating } </p>
            <p> {movie.description} </p> 
      
          </div>
        </div>
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