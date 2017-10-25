import React, { Component } from 'react';
import './movieDetails.css';

/* 
  Ejercicio 1. En este componente recibimos a través del router la película que queremos
  ver en props.location.state.
  Has de asociar este state recibido al state del componente. 
*/

/* Ejercicio 2.
  Muestra en el componente el titulo (h4) y la descripción de la película (<p>)
  Has de asociar este state recibido al state del componente.
*/

class MovieDetails extends Component {
  constructor(props){
    super(props);
    // this.state = props.location.state;
  }

  render() {
    return (
      <div className="movieDetails">     
        {/* <h4> {this.state.movie.title} </h4>
        <p> {this.state.movie.description} </p>  */}
      </div>
    );
  }
}

export default MovieDetails;