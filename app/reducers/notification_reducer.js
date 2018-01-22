import {
  ADD_NOTIFICATION_OBJECT
} from '../actions/notification_actions';
import merge from 'lodash/merge';

const initialState = {
  showSetup: false,
  showSettings: false,
  time: Date.now()
};

const NotificationReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  newState["time"] = Date.now();
  switch (action.type) {
    case ADD_NOTIFICATION_OBJECT:
      newState["timeoutID"] = action.timeoutID;
      return newState;
    default:
      return newState;
  }
};

export default NotificationReducer;
