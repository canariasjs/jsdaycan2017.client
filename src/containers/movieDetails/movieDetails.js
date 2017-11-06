import React, { Component } from 'react';
import MovieForm from '../movieForm/movieForm';
import { Button } from 'react-bootstrap';
import './movieDetails.css';

/*
  Ejercicio 1: Envíale por parámetro al MovieForm la película que estas viendo en detalles.
  El formulario se sobreescribirá con la pelicula que reciba por parámetro en componentWillReceiveProps()
*/

class MovieDetails extends Component {
  constructor(props){
    super(props);
    this.state = props.location.state;
  }

  open = () => this.setState({ showModal: true });
  close = () => this.setState({ showModal: false });

  render() {
    return (
      <div className="movieDetails">     
        <div className="actionButtons">
          <Button bsStyle="primary" onClick={this.open}> Edit </Button>
          <Button bsStyle="warning"> Delete </Button>
        </div>
        <img src={this.state.movie.poster_image} alt="Poster" width="80px" height="auto" />
        <h4> {this.state.movie.title} </h4>
        <p> {this.state.movie.description} </p> 
        {/* <MovieForm show={this.state.showModal} onHide={this.close} /> */}
        <MovieForm show={this.state.showModal} movie={this.state.movie} onHide={this.close} />
      </div>
    );
  }
}

export default MovieDetails;