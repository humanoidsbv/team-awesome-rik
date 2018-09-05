import { call, put, takeEvery } from 'redux-saga/effects';
import { deleteTeamMember, postTeamMember, getTeamMembers } from '../services/team-members-api/team-members-api';

import {
  ADD_TEAM_MEMBER, addTeamMemberSuccess,
  DELETE_TEAM_MEMBER, deleteTeamMemberSuccess,
  REQUEST_TEAM_MEMBERS, requestTeamMembersSucces
} from '../ducks/team-members';

function* onGetTeamMembers() {
  const response = yield call(getTeamMembers);
  yield put(requestTeamMembersSucces(response));
}

function* onDeleteTeamMember({ id }) {
  yield call(deleteTeamMember, id);
  yield put(deleteTeamMemberSuccess(id));
}

function* onAddTeamMember(action) {
  const timeEntry = yield call(postTeamMember, action.timeEntry);
  yield put(addTeamMemberSuccess(timeEntry));
}

export default function* watchTeamMembers() {
  yield takeEvery(ADD_TEAM_MEMBER, onAddTeamMember);
  yield takeEvery(DELETE_TEAM_MEMBER, onDeleteTeamMember);
  yield takeEvery(REQUEST_TEAM_MEMBERS, onGetTeamMembers);
}
