import React from 'react';
import ReactDOM from 'react-dom';
import { MovieItem } from './movieItem';

it('Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MovieItem />, div);
});
