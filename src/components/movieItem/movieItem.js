/* 
  Ejercicio 1. Refactoriza el componente para mostrar:
  - El titulo
  - La imagen
  - El rating

  Has de utilizar las classes movie para el contenedor y la clase posterImage para la imagen
*/

import React from 'react';
import './movieItem.css';

export const MovieItem = props =>
  <div>
    <p> {props.title} </p>
  </div>

/* 
  // SOLUCIÓN

  <div className="movie">
    <img src={props.poster_image}  className="posterImage" />
    <h4> {props.title} </h4>
    <p> Rating:  {props.rating} </p>
  </div>
*/