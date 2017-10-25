import React from 'react';
import ReactDOM from 'react-dom';
import MovieDetails from './movieDetails';

it('Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MovieDetails />, div);
});
