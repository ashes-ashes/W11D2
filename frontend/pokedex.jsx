import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { HashRouter, Route } from "react-router-dom";

import { Root } from './components/root';

import APIUtil from './util/api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById("root");
  const store = configureStore();

  ReactDOM.render(<Root store={store} />, root);

  //--testing
  window.fetchPokemon = APIUtil.fetchPokemon;
});
