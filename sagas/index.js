import { all } from 'redux-saga/effects';
import watchTimeEntries from './time-entries';
import watchTeamMembers from './team-members';


export default function* rootSaga() {
  yield all([
    watchTeamMembers(),
    watchTimeEntries()
  ]);
}
