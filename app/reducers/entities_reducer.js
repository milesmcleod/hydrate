import { combineReducers } from 'redux';
import EntitiesReducer from './entities_reducer';
import FrequencyReducer from './frequency_reducer';

const RootReducer = combineReducers({
  frequency: FrequencyReducer
});

export default RootReducer;
