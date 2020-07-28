import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import { createStore } from 'redux';
import arthPracs from './reducers';

import { Provider } from 'react-redux';

const store = createStore(arthPracs);

ReactDOM.render(
  <React.StrictMode>
    
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
          <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
