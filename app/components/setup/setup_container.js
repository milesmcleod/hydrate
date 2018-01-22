import React from 'react';
import { connect } from 'react-redux';
import {
  hideSetup,
  showHome
} from '../../actions/ui_actions.js';
import {
  receiveInterval,
  receiveStart,
  receiveEnd
} from '../../actions/entities_actions.js';
import {
  receiveNotificationObject
} from '../../actions/notification_actions.js';
import Setup from './setup.js';

const mapStateToProps = (state) => {
  return ({
    show: state.ui.showSetup
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    hideSetup: () => dispatch(hideSetup()),
    showHome: () => dispatch(showHome()),
    receiveInterval: (freq) => dispatch(receiveInterval(freq)),
    receiveStart: (freq) => dispatch(receiveStart(freq)),
    receiveEnd: (freq) => dispatch(receiveEnd(freq)),
    receiveNotificationObject: (object) => dispatch(
      receiveNotificationObject(object)
    )
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Setup);
