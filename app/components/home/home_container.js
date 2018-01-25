import React from 'react';
import { connect } from 'react-redux';
import {
  showSettings,
  hideSettings,
  showInterval,
  hideInterval,
  showStart,
  hideStart,
  showEnd,
  hideEnd,
  showSetup,
  hideSetup,
  showAbout,
  hideHome
} from '../../actions/ui_actions.js';
import {
  getNewFact,
  receiveInterval,
  receiveStart,
  receiveEnd,
  toggle
} from '../../actions/entities_actions.js';
import Home from './home.js';

const mapStateToProps = (state) => {
  return ({
    on: state.entities.on,
    show: state.ui.showHome,
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
    toggle: (on) => dispatch(toggle(on)),
    showAbout: () => dispatch(showAbout()),
    hideHome: () => dispatch(hideHome()),
    showSettings: () => dispatch(showSettings()),
    hideSettings: () => dispatch(hideSettings()),
    showInterval: () => dispatch(showInterval()),
    hideInterval: () => dispatch(hideInterval()),
    showStart: () => dispatch(showStart()),
    hideStart: () => dispatch(hideStart()),
    showEnd: () => dispatch(showEnd()),
    hideEnd: () => dispatch(hideEnd()),
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
