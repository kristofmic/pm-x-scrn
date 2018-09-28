import { createStore as createReduxStore } from 'redux';

const initialState = {
  whoAmI: 'Groot',
};

function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'IAM':
      return Object.assign({}, state, {
        whoAmI: payload,
      });
    default:
      return state;
  }
}

export function createStore() {
  return createReduxStore(reducer);
}
