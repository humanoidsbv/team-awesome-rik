import { combineReducers } from 'redux';

import { clientsReducer } from './clients';
import { timeEntriesReducer } from './time-entries';
import { teamMembersReducer } from './team-members';
import { headerReducer } from './header';


const rootReducer = combineReducers({
  clients: clientsReducer,
  teamMembers: teamMembersReducer,
  timeEntries: timeEntriesReducer,
  header: headerReducer
});

export default rootReducer;
