import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Movies from './containers/movies/movies';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Movies />, document.getElementById('root'));
registerServiceWorker();
