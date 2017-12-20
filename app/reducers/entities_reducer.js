import { combineReducers } from 'redux';
import {
  RECEIVE_FREQUENCY,
  CLEAR_FREQUENCY,
  RECEIVE_NEW_FACT
} from '../actions/entities_actions';
import merge from 'lodash/merge';

const initialState = {};

const EntitiesReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_FREQUENCY:
      newState = merge({}, state);
      newState["frequency"] = action.frequency;
      return newState;
    case CLEAR_FREQUENCY:
      newState = merge({}, state);
      newState["frequency"] = null;
      return newState;
    case RECEIVE_NEW_FACT:
      newState = merge({}, state);
      newState["fact"] = action.payload.fact;
      return newState;
    default:
      return state;
  }
};

export default EntitiesReducer;
