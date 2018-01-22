import {
  SHOW_SETUP,
  HIDE_SETUP,
  SHOW_HOME,
  HIDE_HOME,
  SHOW_SLIDES,
  HIDE_SLIDES,
  SHOW_INTERVAL,
  HIDE_INTERVAL,
  SHOW_START,
  HIDE_START,
  SHOW_END,
  HIDE_END,
  SHOW_SETTINGS,
  HIDE_SETTINGS
} from '../actions/ui_actions';
import merge from 'lodash/merge';

const initialState = {
  showSetup: false,
  showHome: false,
  showSettings: false,
  showInterval: false,
  showStart: false,
  showEnd: false,
  showSlides: true,
  time: Date.now()
};

const UiReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  newState["time"] = Date.now();
  switch (action.type) {
    case SHOW_HOME:
      newState["showHome"] = true;
      return newState;
    case HIDE_HOME:
      newState["showHome"] = false;
      return newState;
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
    case SHOW_INTERVAL:
      newState["showInterval"] = true;
      return newState;
    case HIDE_INTERVAL:
      newState["showInterval"] = false;
      return newState;
    case SHOW_START:
      newState["showStart"] = true;
      return newState;
    case HIDE_START:
      newState["showStart"] = false;
      return newState;
    case SHOW_END:
      newState["showEnd"] = true;
      return newState;
    case HIDE_END:
      newState["showEnd"] = false;
      return newState;
    case SHOW_SLIDES:
      newState["showSlides"] = true;
      return newState;
    case HIDE_SLIDES:
      newState["showSlides"] = false;
      return newState;
    default:
      return newState;
  }
};

export default UiReducer;
