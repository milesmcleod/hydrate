import {
  SHOW_SETUP,
  HIDE_SETUP,
  SHOW_HOME,
  HIDE_HOME,
  SHOW_SLIDE_1,
  HIDE_SLIDE_1,
  SHOW_SLIDE_2,
  HIDE_SLIDE_2,
  SHOW_SLIDE_3,
  HIDE_SLIDE_3,
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
  showHome: true,
  showSettings: false,
  showInterval: false,
  showStart: false,
  showEnd: false,
  showSlide1: false,
  showSlide2: false,
  showSlide3: false,
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
    case SHOW_SLIDE_1:
      newState["showSlide1"] = true;
      return newState;
    case HIDE_SLIDE_1:
      newState["showSlide1"] = false;
      return newState;
    case SHOW_SLIDE_2:
      newState["showSlide2"] = true;
      return newState;
    case HIDE_SLIDE_2:
      newState["showSlide2"] = false;
      return newState;
    case SHOW_SLIDE_3:
      newState["showSlide3"] = true;
      return newState;
    case HIDE_SLIDE_3:
      newState["showSlide3"] = false;
      return newState;
    default:
      return newState;
  }
};

export default UiReducer;
