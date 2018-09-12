import { call, put, takeEvery } from 'redux-saga/effects';
import { deleteClient, postClient, getClients } from '../services/clients-api/clients-api';

import {
  ADD_CLIENT, addClientSuccess,
  DELETE_CLIENT, deleteClientSuccess,
  REQUEST_CLIENTS, requestClientsSucces
} from '../ducks/clients';

function* onGetClients() {
  const response = yield call(getClients);
  yield put(requestClientsSucces(response));
}

function* onDeleteClient({ id }) {
  yield call(deleteClient, id);
  yield put(deleteClientSuccess(id));
}

function* onAddClient(action) {
  const client = yield call(postClient, action.client);
  yield put(addClientSuccess(client));
}

export default function* watchClients() {
  yield takeEvery(ADD_CLIENT, onAddClient);
  yield takeEvery(DELETE_CLIENT, onDeleteClient);
  yield takeEvery(REQUEST_CLIENTS, onGetClients);
}
