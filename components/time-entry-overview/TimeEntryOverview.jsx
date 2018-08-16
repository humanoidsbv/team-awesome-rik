import React from 'react';

import mockTimeEntries from './mockTimeEntry.json';
import TimeEntryForm from '../time-entry-form/TimeEntryForm';
import TimeEntries from '../time-entries/TimeEntries';
import './time-entry-overview.scss';

class TimeEntryOverview extends React.Component {
  state = { isTimeEntryFormOpen: false, timeEntries: mockTimeEntries };

  onNewTimeEntry = (newEntry) => {
    this.setState(({ timeEntries }) => ({ timeEntries: [newEntry, ...timeEntries] }));
  };

  handleClick = () => {
    this.setState(({ isTimeEntryFormOpen }) => ({ isTimeEntryFormOpen: !isTimeEntryFormOpen }));
  };

  render() {
    const { isTimeEntryFormOpen, timeEntries } = this.state;

    return (
      <React.Fragment>
        <button
          className={`time-entry-button
                     ${isTimeEntryFormOpen ? 'time-entry-button--open' : 'time-entry-button--close'}`
                     }
          type="button"
          onClick={this.handleClick}
        >
          <img
            className="time-entry-button__plus"
            src="/static/icons/plus.svg"
            alt="plus"
          />
          New time entry
        </button>
        <TimeEntryForm onNewTimeEntry={this.onNewTimeEntry} />
        <TimeEntries timeEntries={timeEntries} />
      </React.Fragment>
    );
  }
}

export default TimeEntryOverview;
