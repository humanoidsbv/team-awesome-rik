import { combineReducers } from 'redux';
import { timeEntriesReducer } from './time-entries';
import { teamMembersReducer } from './team-members';
import { headerReducer } from './header';


const rootReducer = combineReducers({
  teamMembers: teamMembersReducer,
  timeEntries: timeEntriesReducer,
  header: headerReducer
});

export default rootReducer;
