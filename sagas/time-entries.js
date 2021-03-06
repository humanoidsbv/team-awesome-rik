import { call, put, takeEvery } from 'redux-saga/effects';
import { deleteTimeEntry, postTimeEntry, getTimeEntries } from '../services/time-entries-api/time-entries-api';

import {
  ADD_TIME_ENTRY, addTimeEntrySuccess,
  DELETE_TIME_ENTRY, deleteTimeEntrySuccess,
  REQUEST_TIME_ENTRIES, requestTimeEntriesSucces
} from '../ducks/time-entries';

function* onGetTimeEntries() {
  const response = yield call(getTimeEntries);
  yield put(requestTimeEntriesSucces(response));
}

function* onDeleteTimeEntry({ id }) {
  yield call(deleteTimeEntry, id);
  yield put(deleteTimeEntrySuccess(id));
}

function* onAddTimeEntry(action) {
  const timeEntry = yield call(postTimeEntry, action.timeEntry);
  yield put(addTimeEntrySuccess(timeEntry));
}

export default function* watchTimeEntries() {
  yield takeEvery(ADD_TIME_ENTRY, onAddTimeEntry);
  yield takeEvery(DELETE_TIME_ENTRY, onDeleteTimeEntry);
  yield takeEvery(REQUEST_TIME_ENTRIES, onGetTimeEntries);
}
