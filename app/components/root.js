import React from 'react';
import { Provider } from 'react-redux';
import AppContainer from './app_container.js';
import configureStore from '../store/store';

let store = configureStore();
// Disable warnings
// console.disableYellowBox = true;

const Root = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

export default Root;
