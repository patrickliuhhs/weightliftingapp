/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date
 * @description entry point for application.  Hangs React app off of #contents in index.html
 *
 * ************************************
 */

import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
import App from './components/App.jsx';
// import store from './store';

(() => {
  console.log('webpack worked')
})();

render(
  // <Provider>
    <App />,
  // </Provider>,
  document.getElementById('contents')
);
 

 