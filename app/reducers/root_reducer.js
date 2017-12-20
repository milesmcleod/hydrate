import { combineReducers } from 'redux';
import EntitiesReducer from './entities_reducer.js';
import UiReducer from './ui_reducer.js';

const RootReducer = combineReducers({
  entities: EntitiesReducer,
  ui: UiReducer,
});

export default RootReducer;
