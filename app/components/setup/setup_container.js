import React from 'react';
import { connect } from 'react-redux';
import {
  hideSetup
} from '../../actions/ui_actions.js';
import {
  receiveFrequency
} from '../../actions/entities_actions.js';
import Setup from './setup.js';

const mapStateToProps = (state) => {
  return ({

  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    hideSetup: () => dispatch(hideSetup()),
    receiveFrequency: (freq) => dispatch(receiveFrequency(freq))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Setup);
