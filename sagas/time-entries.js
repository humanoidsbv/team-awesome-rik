import { put, takeEvery } from 'redux-saga/effects';
import { deleteTimeEntry, postTimeEntry, getTimeEntries } from '../services/time-entries-api/time-entries-api';

import {
  ADD_TIME_ENTRY, ADD_TIME_ENTRY_SUCCESS,
  DELETE_TIME_ENTRY, DELETE_TIME_ENTRY_SUCCESS,
  REQUEST_TIME_ENTRIES, REQUEST_TIME_ENTRIES_SUCCESS
} from '../ducks/time-entries';

function* onGetTimeEntries() {
  const response = yield getTimeEntries();
  yield put({ type: REQUEST_TIME_ENTRIES_SUCCESS, timeEntries: response });
}

function* onDeleteTimeEntry({ id }) {
  yield deleteTimeEntry(id);
  yield put({ type: DELETE_TIME_ENTRY_SUCCESS, id });
}

function* onAddTimeEntry(action) {
  const timeEntry = yield postTimeEntry(action.timeEntry);
  yield put({ type: ADD_TIME_ENTRY_SUCCESS, timeEntry });
}

export default function* watchTimeEntries() {
  yield takeEvery(ADD_TIME_ENTRY, onAddTimeEntry);
  yield takeEvery(DELETE_TIME_ENTRY, onDeleteTimeEntry);
  yield takeEvery(REQUEST_TIME_ENTRIES, onGetTimeEntries);
}
