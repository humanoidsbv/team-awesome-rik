import { combineReducers } from 'redux';
import { timeEntriesReducer } from './time-entries';
import { headerReducer } from './header';


export const rootReducer = combineReducers({
  timeEntries: timeEntriesReducer,
  header: headerReducer
});
