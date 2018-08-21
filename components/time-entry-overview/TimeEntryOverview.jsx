import React from 'react';

import TimeEntryForm from '../time-entry-form/TimeEntryForm';
import TimeEntries from '../time-entries/TimeEntries';
import { deleteTimeEntry, getTimeEntries, postTimeEntry } from '../../services/time-entries-api/time-entries-api';
import './time-entry-overview.scss';

class TimeEntryOverview extends React.Component {
  state = { timeEntries: [] };

  componentDidMount() {
    getTimeEntries().then((timeEntries) => {
      this.setState({ timeEntries });
    });
  }

  deleteCurrentEntry = (id) => {
    const timeEntries = this.state.timeEntries.filter((entry) => entry.id !== id);
    deleteTimeEntry(id).then(() => {
      this.setState({ timeEntries });
    });
  }

  addTimeEntry = (newEntry) => (
    postTimeEntry(newEntry).then((responseToEntry) => {
      this.setState(({ timeEntries }) => ({
        timeEntries: [...timeEntries, responseToEntry]
      }));
    })
  )

  render() {
    const { timeEntries } = this.state;

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
