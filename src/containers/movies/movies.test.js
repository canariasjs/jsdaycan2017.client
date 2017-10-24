import React from 'react';
import ReactDOM from 'react-dom';
import Movies from './movies';

it('Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Movies />, div);
});
