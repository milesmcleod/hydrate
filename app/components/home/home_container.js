import React from 'react';
import { connect } from 'react-redux';
import {
  showSettings,
  hideSettings,
  showSetup,
  hideSetup
} from '../../actions/ui_actions.js';
import {
  getNewFact,
  receiveFrequency
} from '../../actions/entities_actions.js';
import Home from './home.js';

const mapStateToProps = (state) => {
  return ({
    frequency: state.entities.frequency,
    fact: state.entities.fact,
    setup: state.ui.showSetup,
    settings: state.ui.showSettings,
    time: state.ui.time
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    showSettings: () => dispatch(showSettings()),
    hideSettings: () => dispatch(hideSettings()),
    showSetup: () => dispatch(showSetup()),
    hideSetup: () => dispatch(hideSetup()),
    getNewFact: () => getNewFact(),
    receiveFrequency: (freq) => dispatch(receiveFrequency(freq))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
