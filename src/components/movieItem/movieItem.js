/* 
  Ejercicio 1. Refactoriza el componente convirtiéndolo en un componente
  presentacional eliminando los elementos que no sean necesarios 
*/
import React, { Component } from 'react';

export class MovieItem extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <p> Titulo:  {this.props.title} </p>
      </div>
    );
  }
}


/* 
// SOLUCIÓN

import React from 'react';

export const MovieItem = props =>
  <div>
    <p> Titulo:  {props.title} </p>
  </div>
*/