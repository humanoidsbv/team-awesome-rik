import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  addTimeEntry, deleteTimeEntry,
  filterTimeEntriesSuccess, requestTimeEntries,
  timeEntryActiveFilterSelector, timeEntriesSelector
} from '../../ducks/time-entries';
import TimeEntryOverview from './TimeEntryOverview';

const TimeEntryOverviewContainer = (props) => (
  <TimeEntryOverview {...props} />
);


const mapStateToProps = (state) => ({
  activeFilter: timeEntryActiveFilterSelector(state),
  timeEntries: timeEntriesSelector(state)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addTimeEntry,
  deleteTimeEntry,
  filterTimeEntriesSuccess,
  requestTimeEntries,
  timeEntriesSelector
}, dispatch);


TimeEntryOverviewContainer.propTypes = TimeEntryOverview.propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(TimeEntryOverviewContainer);
