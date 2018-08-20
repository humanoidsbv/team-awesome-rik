import React from 'react';

import TimeEntryForm from '../time-entry-form/TimeEntryForm';
import TimeEntries from '../time-entries/TimeEntries';
import fetchTimeEntries from '../../services/time-entries-api/time-entries-api';
import './time-entry-overview.scss';

class TimeEntryOverview extends React.Component {
  state = { timeEntries: [] };

  componentDidMount() {
    fetchTimeEntries().then((timeEntries) => {
      this.setState({
        timeEntries
      });
    });
  }

  addTimeEntry = (newEntry) => {
    this.setState(({ timeEntries }) => ({ timeEntries: [newEntry, ...timeEntries] }));
  };

  render() {
    const { timeEntries } = this.state;

    return (
      <div className="container">
        <TimeEntryForm
          addTimeEntry={this.addTimeEntry}
          changeFormVisibility={this.changeFormVisibility}
        />
        <TimeEntries timeEntries={timeEntries} />
      </div>
    );
  }
}

export default TimeEntryOverview;
