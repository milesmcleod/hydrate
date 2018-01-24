import React from 'react';

import { connect } from 'react-redux';

import About from './about.js';

import {
  showHome,
  hideAbout
} from '../../actions/ui_actions.js';

const mapStateToProps = (state) => {
  return ({
    show: state.ui.showAbout
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    hideAbout: () => dispatch(hideAbout()),
    showHome: () => dispatch(showHome())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
