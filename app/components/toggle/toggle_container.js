import React from 'react';
import { connect } from 'react-redux';
import {
  toggle
} from '../../actions/entities_actions.js';
import {
  receiveNotificationObject
} from '../../actions/notification_actions.js';
import Toggle from './toggle.js';

const mapStateToProps = (state) => {
  return ({
    on: state.entities.on,
    interval: state.entities.interval,
    start: state.entities.start,
    end: state.entities.end,
    notificationTimeoutID: state.notification.timeoutID
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    toggle: (on) => dispatch(toggle(on)),
    receiveNotificationObject: (object) => dispatch(
      receiveNotificationObject(object)
    )
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toggle);
