import {
  SHOW_SETUP,
  HIDE_SETUP,
  SHOW_SETTINGS,
  HIDE_SETTINGS
} from '../actions/ui_actions';
import merge from 'lodash/merge';

const initialState = {
  showSetup: false,
  showSettings: false,
  time: Date.now()
};

const UiReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  newState["time"] = Date.now();
  switch (action.type) {
    case SHOW_SETUP:
      newState["showSetup"] = true;
      return newState;
    case HIDE_SETUP:
      newState["showSetup"] = false;
      return newState;
    case SHOW_SETTINGS:
      newState["showSettings"] = true;
      return newState;
    case HIDE_SETTINGS:
      newState["showSettings"] = false;
      return newState;
    default:
      return newState;
  }
};

export default UiReducer;
