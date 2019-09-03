import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';

//---testing---//
import { fetchAllPokemon } from './util/api_util';
import { receiveAllPokemon } from './actions/pokemon_actions';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById("root");
  const store = configureStore();

  ReactDOM.render(<h1>react</h1>, root);

});

//---testing---//
window.receiveAllPokemon = receiveAllPokemon;
window.fetchAllPokemon = fetchAllPokemon;
window.getState = store.getState;
window.dispatch = store.dispatch;