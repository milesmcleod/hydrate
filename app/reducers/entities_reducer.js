import { combineReducers } from 'redux';
import FrequencyReducer from './frequency_reducer.js';

const EntitiesReducer = combineReducers({
  frequency: FrequencyReducer
});

export default EntitiesReducer;
