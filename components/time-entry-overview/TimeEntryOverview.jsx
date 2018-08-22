import React from 'react';
import PropTypes from 'prop-types';

import TimeEntryForm from '../time-entry-form/TimeEntryForm';
import TimeEntries from '../time-entries/TimeEntries';
import { deleteTimeEntry, getTimeEntries, postTimeEntry } from '../../services/time-entries-api/time-entries-api';
import './time-entry-overview.scss';

class TimeEntryOverview extends React.Component {
  static propTypes = {
    addTimeEntry: PropTypes.func.isRequired,
    addTimeEntrySuccess: PropTypes.func.isRequired,
    deleteTimeEntry: PropTypes.func.isRequired,
    deleteTimeEntrySuccess: PropTypes.func.isRequired,
    requestTimeEntries: PropTypes.func.isRequired,
    requestTimeEntriesSucces: PropTypes.func.isRequired,
    timeEntries: PropTypes.arrayOf(PropTypes.shape({
      employer: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      from: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired
    })).isRequired
  }

  componentDidMount() {
    this.props.requestTimeEntries();
    getTimeEntries().then((timeEntries) => {
      this.props.requestTimeEntriesSucces(timeEntries);
    });
  }

  deleteCurrentEntry = (id) => {
    this.props.deleteTimeEntry();
    deleteTimeEntry(id).then(() => {
      this.props.deleteTimeEntrySuccess(id);
    });
  }

  addTimeEntry = (newEntry) => {
    this.props.addTimeEntry();
    return (
      postTimeEntry(newEntry).then((response) => {
        this.props.addTimeEntrySuccess(response);
      })
    );
  }

  render() {
    const { timeEntries } = this.props;

    return (
      <div className="container">
        <TimeEntryForm
          addTimeEntry={this.addTimeEntry}
          changeFormVisibility={this.changeFormVisibility}
        />
        <TimeEntries
          timeEntries={timeEntries}
          deleteCurrentEntry={this.deleteCurrentEntry}
        />
      </div>
    );
  }
}

export default TimeEntryOverview;
