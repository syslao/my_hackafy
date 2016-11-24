import React from 'react';
import ReactDOM from 'react-dom';
import createRoutes from './routes';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';


import './styles/index.css';

const store = configureStore();
const routes = createRoutes(store)

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root')
);
