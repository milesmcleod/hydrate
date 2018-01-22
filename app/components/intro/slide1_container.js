import React from 'react';
import { connect } from 'react-redux';
import {
  showSlide2,
  hideSlide1
} from '../../actions/ui_actions.js';
import Slide1 from './slide1.js';

const mapStateToProps = (state) => {
  return ({
    show: state.ui.showSlide1
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    showSlide2: () => dispatch(showSlide2()),
    hideSlide1: () => dispatch(hideSlide1()),
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Slide1);
