import React from 'react';
import { connect } from 'react-redux';
import {
  showSlide2,
  showHome,
  hideSlide3
} from '../../actions/ui_actions.js';
import Slide3 from './slide3.js';

const mapStateToProps = (state) => {
  return ({
    show: state.ui.showSlide3
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    showSlide2: () => dispatch(showSlide2()),
    showHome: () => dispatch(showHome()),
    hideSlide3: () => dispatch(hideSlide3()),
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Slide3);
