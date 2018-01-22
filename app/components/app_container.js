import React from 'react';
import { connect } from 'react-redux';
import {
  showSlides,
  showHome
} from '../actions/ui_actions.js';
import {
  receiveInterval,
  receiveStart,
  receiveEnd
} from '../actions/entities_actions.js';
import App from './app.js';

const mapStateToProps = (state) => {
  return ({
    interval: state.entities.interval,
    start: state.entities.start,
    end: state.entities.end
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    showSlides: () => dispatch(showSlides()),
    showHome: () => dispatch(showHome()),
    receiveInterval: (freq) => dispatch(receiveInterval(freq)),
    receiveStart: (freq) => dispatch(receiveStart(freq)),
    receiveEnd: (freq) => dispatch(receiveEnd(freq))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
