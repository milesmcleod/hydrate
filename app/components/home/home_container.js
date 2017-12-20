import React from 'react';
import { connect } from 'react-redux';
import {
  showSettings,
  hideSettings,
  showSetup,
  hideSetup
} from '../../actions/ui_actions';
import Home from './home';

const mapStateToProps = (state) => {
  return ({
    
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    showSettings: () => dispatch(showSettings()),
    hideSettings: () => dispatch(hideSettings()),
    showSetup: () => dispatch(showSetup()),
    hideSetup: () => dispatch(hideSetup())
  });
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Home);
