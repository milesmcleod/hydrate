import Home from './home';

import React from 'react';
import { connect } from 'react-redux';
import {
  receiveCurrentCoin,
} from '../../actions/coin_actions';
import CoinIndexItem from './coin_index_item';
