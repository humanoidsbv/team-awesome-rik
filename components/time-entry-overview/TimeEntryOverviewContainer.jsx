import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  addTimeEntry, deleteTimeEntry,
  filterTimeEntriesSuccess, requestTimeEntries,
  timeEntryActiveFilterSelector, timeEntriesSelector
} from '../../ducks/time-entries.ts';

import { requestClients, clientsIdAndNameSelector } from '../../ducks/clients.ts';
import TimeEntryOverview from './TimeEntryOverview.tsx';

const TimeEntryOverviewContainer = (props) => (
  <TimeEntryOverview {...props} />
);


const mapStateToProps = (state) => ({
  activeFilter: timeEntryActiveFilterSelector(state),
  timeEntries: timeEntriesSelector(state),
  clientsIdAndName: clientsIdAndNameSelector(state)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addTimeEntry,
  deleteTimeEntry,
  filterTimeEntriesSuccess,
  requestClients,
  requestTimeEntries,
  timeEntriesSelector
}, dispatch);


TimeEntryOverviewContainer.propTypes = TimeEntryOverview.propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(TimeEntryOverviewContainer);
