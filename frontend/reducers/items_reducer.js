import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';
import { RECEIVE_POKEMON } from '../actions/pokemon_actions';

const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case (RECEIVE_POKEMON):
      action.items.forEach((item) => {
        newState[item.id] = item;
      });
      return newState;
    default:
      return newState;
  }
};

export default itemsReducer;