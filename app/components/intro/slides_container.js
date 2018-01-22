import React from 'react';
import { connect } from 'react-redux';
import {
  hideSlides,
  showSetup,
} from '../../actions/ui_actions.js';
import Slides from './slides.js';

const mapStateToProps = (state) => {
  return ({
    show: state.ui.showSlides
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    hideSlides: () => dispatch(hideSlides()),
    showSetup: () => dispatch(showSetup())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Slides);
