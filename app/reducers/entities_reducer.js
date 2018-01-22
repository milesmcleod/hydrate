import { combineReducers } from 'redux';
import {
  RECEIVE_INTERVAL,
  RECEIVE_START,
  RECEIVE_END,
  CLEAR_INTERVAL,
  RECEIVE_NEW_FACT
} from '../actions/entities_actions';
import merge from 'lodash/merge';

const initialState = {};

const EntitiesReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_INTERVAL:
      newState = merge({}, state);
      newState["interval"] = action.interval;
      return newState;
    case RECEIVE_START:
      newState = merge({}, state);
      newState["start"] = action.start;
      return newState;
    case RECEIVE_END:
      newState = merge({}, state);
      newState["end"] = action.end;
      return newState;
    case CLEAR_INTERVAL:
      newState = merge({}, state);
      newState["interval"] = null;
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
