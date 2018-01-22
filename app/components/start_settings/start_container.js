import React from 'react';
import { connect } from 'react-redux';
import {
  hideStart
} from '../../actions/ui_actions.js';
import {
  receiveStart
} from '../../actions/entities_actions.js';
import {
  receiveNotificationObject
} from '../../actions/notification_actions.js';
import Start from './start.js';

const mapStateToProps = (state) => {
  return ({
    show: state.ui.showStart,
    interval: state.entities.interval,
    start: state.entities.start,
    end: state.entities.end,
    notificationTimeoutID: state.notification.timeoutID
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    hideStart: () => dispatch(hideStart()),
    receiveStart: (value) => dispatch(receiveStart(value)),
    receiveNotificationObject: (object) => dispatch(
      receiveNotificationObject(object)
    )
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Start);
