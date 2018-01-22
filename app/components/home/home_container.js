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
  receiveInterval,
  receiveStart,
  receiveEnd
} from '../../actions/entities_actions.js';
import Home from './home.js';

const mapStateToProps = (state) => {
  return ({
    interval: state.entities.interval,
    start: state.entities.start,
    end: state.entities.end,
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
    receiveInterval: (freq) => dispatch(receiveInterval(freq)),
    receiveStart: (freq) => dispatch(receiveStart(freq)),
    receiveEnd: (freq) => dispatch(receiveEnd(freq))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
