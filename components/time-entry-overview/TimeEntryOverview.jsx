import React from 'react';

import mockTimeEntries from './mockTimeEntry.json';
import TimeEntryForm from '../time-entry-form/TimeEntryForm';
import TimeEntries from '../time-entries/TimeEntries';
import './time-entry-overview.scss';

class TimeEntryOverview extends React.Component {
  state = { timeEntries: mockTimeEntries };

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
