import React from 'react';
import { connect } from 'react-redux';
import {
  hideSlides,
  showHome,
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
    showHome: () => dispatch(showHome())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Slides);
