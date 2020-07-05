import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Root from './Root';
import App from './components/App';

window.axios = axios;

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.querySelector('#root')
);
