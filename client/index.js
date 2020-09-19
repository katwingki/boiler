//"root/client/index.js" ==> an 'entry' file for webpack pipeline.
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import history from './history';
import store from './store';
import App from './app';

// establishes socket connection
import './socket';

// assuming our index.scss is in the same directory as our index.js
//import './index.css';

ReactDOM.render(
  // import your store and import the Provider component from react-redux. Plug it in at the top of your app structure.
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  //make sure this is the same as the id of the div in your index.html
  document.getElementById('app')
);
