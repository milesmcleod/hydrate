import React from 'react';
import { connect } from 'react-redux';
import {
  showSlide1,
  showSlide3,
  hideSlide2
} from '../../actions/ui_actions.js';
import Slide2 from './slide2.js';

const mapStateToProps = (state) => {
  return ({
    show: state.ui.showSlide2
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    showSlide1: () => dispatch(showSlide1()),
    showSlide3: () => dispatch(showSlide3()),
    hideSlide2: () => dispatch(hideSlide2()),
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Slide2);
