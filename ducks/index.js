import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import { timeEntriesReducer } from './time-entries';
import { headerReducer } from './header';


export const rootReducer = combineReducers({
  timeEntries: timeEntriesReducer,
  header: headerReducer
});

export function* rootSaga() {
  yield all([]);
}
