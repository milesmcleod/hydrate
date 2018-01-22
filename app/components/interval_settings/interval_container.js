import React from 'react';
import { connect } from 'react-redux';
import {
  hideInterval
} from '../../actions/ui_actions.js';
import {
  receiveInterval
} from '../../actions/entities_actions.js';
import {
  receiveNotificationObject
} from '../../actions/notification_actions.js';
import Interval from './interval.js';

const mapStateToProps = (state) => {
  return ({
    show: state.ui.showInterval,
    interval: state.entities.interval,
    start: state.entities.start,
    end: state.entities.end,
    notificationTimeoutID: state.notification.timeoutID
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    hideInterval: () => dispatch(hideInterval()),
    receiveInterval: (freq) => dispatch(receiveInterval(freq)),
    receiveNotificationObject: (object) => dispatch(
      receiveNotificationObject(object)
    )
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Interval);
