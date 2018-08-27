import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  addTimeEntry, deleteTimeEntry, requestTimeEntries, timeEntriesSelector
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
  deleteTimeEntry,
  requestTimeEntries,
  timeEntriesSelector
}, dispatch);


TimeEntryOverviewContainer.propTypes = TimeEntryOverview.propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(TimeEntryOverviewContainer);
