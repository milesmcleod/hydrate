import React from 'react';
import { connect } from 'react-redux';
import {
  hideSettings
} from '../../actions/ui_actions.js';
import {
  receiveInterval,
  receiveStart,
  receiveEnd
} from '../../actions/entities_actions.js';
import Settings from './settings.js';

const mapStateToProps = (state) => {
  return ({
    show: state.ui.showSettings
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    hideSettings: () => dispatch(hideSettings()),
    receiveInterval: (freq) => dispatch(receiveInterval(freq)),
    receiveStart: (freq) => dispatch(receiveStart(freq)),
    receiveEnd: (freq) => dispatch(receiveEnd(freq))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
