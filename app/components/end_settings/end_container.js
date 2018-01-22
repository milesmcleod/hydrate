import React from 'react';
import { connect } from 'react-redux';
import {
  hideEnd
} from '../../actions/ui_actions.js';
import {
  receiveEnd
} from '../../actions/entities_actions.js';
import {
  receiveNotificationObject
} from '../../actions/notification_actions.js';
import End from './end.js';

const mapStateToProps = (state) => {
  return ({
    show: state.ui.showEnd,
    interval: state.entities.interval,
    start: state.entities.start,
    end: state.entities.end,
    notificationTimeoutID: state.notification.timeoutID
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    hideEnd: () => dispatch(hideEnd()),
    receiveEnd: (value) => dispatch(receiveEnd(value)),
    receiveNotificationObject: (object) => dispatch(
      receiveNotificationObject(object)
    )
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(End);
