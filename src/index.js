import React from 'react';
import ReactDOM from 'react-dom';
import './styles/globals.css';
import './styles/media.css'
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

serviceWorker.unregister();
