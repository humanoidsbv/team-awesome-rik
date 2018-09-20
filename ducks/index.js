import { combineReducers } from 'redux';

import { clientsReducer } from './clients.ts';
import { timeEntriesReducer } from './time-entries.ts';
import { teamMembersReducer } from './team-members';
import { headerReducer } from './header';


const rootReducer = combineReducers({
  clients: clientsReducer,
  teamMembers: teamMembersReducer,
  timeEntries: timeEntriesReducer,
  header: headerReducer
});

export default rootReducer;
