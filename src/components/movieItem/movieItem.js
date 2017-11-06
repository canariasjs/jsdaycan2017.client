import React from 'react';
import './movieItem.css';

export const MovieItem = props =>
  <div className="movie">
    <img src={props.poster_image} alt="Poster" className="posterImage" />
    <h4> {props.title} </h4>
    <p> Rating:  {props.rating} </p>
  </div>