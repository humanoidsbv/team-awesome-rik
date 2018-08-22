import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  addTimeEntry, addTimeEntrySuccess, deleteTimeEntry,
  deleteTimeEntrySuccess, requestTimeEntries, requestTimeEntriesSucces,
  timeEntriesSelector
} from '../../ducks/time-entries';
import TimeEntryOverview from './TimeEntryOverview';

const TimeEntryOverviewContainer = (props) => (
  <TimeEntryOverview {...props} />
);


const mapStateToProps = (state) => ({
  timeEntries: timeEntriesSelector(state)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addTimeEntry,
  addTimeEntrySuccess,
  deleteTimeEntry,
  deleteTimeEntrySuccess,
  requestTimeEntries,
  requestTimeEntriesSucces,
  timeEntriesSelector
}, dispatch);


TimeEntryOverviewContainer.propTypes = TimeEntryOverview.propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(TimeEntryOverviewContainer);