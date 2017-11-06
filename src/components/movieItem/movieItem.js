import React from 'react';
import { Glyphicon } from 'react-bootstrap';
import './movieItem.css';

export const MovieItem = props =>
  <div className="movie">
    <img src={props.poster_image} alt="Poster" className="posterImage" />
    <h4> {props.title} </h4>
    <p>  <Glyphicon glyph="star" />   {props.rating} </p>
  </div>