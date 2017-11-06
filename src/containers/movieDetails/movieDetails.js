import React, { Component } from 'react';
import './movieDetails.css';

class MovieDetails extends Component {
  constructor(props){
    super(props);
    this.state = props.location.state;
  }

  render() {
    return (
      <div className="movieDetails">     
        <img src={this.state.movie.poster_image} width="80px" height="auto" />
        <h4> {this.state.movie.title} </h4>
        <p> {this.state.movie.description} </p> 
      </div>
    );
  }
}

export default MovieDetails;