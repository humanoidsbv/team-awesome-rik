import React from 'react';

import TimeEntryForm from './time-entry-form/TimeEntryForm';
import TimeEntries from './time-entries/TimeEntries';
import './time-entry-overview.scss';

class TimeEntryOverview extends React.Component {
  state = { isTimeEntryFormOpen: false };

  handleClick = () => {
    this.setState(({ isTimeEntryFormOpen }) => ({ isTimeEntryFormOpen: !isTimeEntryFormOpen }));
  };

  render() {
    const { isTimeEntryFormOpen } = this.state;
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
        <TimeEntryForm />
        <TimeEntries />
      </React.Fragment>
    );
  }
}

export default TimeEntryOverview;
