import { all } from 'redux-saga/effects';

import watchClients from './clients';
import watchTimeEntries from './time-entries';
import watchTeamMembers from './team-members';


export default function* rootSaga() {
  yield all([
    watchClients(),
    watchTeamMembers(),
    watchTimeEntries()
  ]);
}
