import merge from 'lodash/merge';

const initialState = {};

const UiReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    default:
      return state;
  }
};

export default UiReducer;
