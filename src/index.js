import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './config/store';
import App from './containers/app';

import 'sanitize.css/sanitize.css';
import 'normalize.css';
import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.min.css';

import './styles/app.css';

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);
