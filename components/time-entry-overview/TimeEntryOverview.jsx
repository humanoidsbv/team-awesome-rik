import React from 'react';

import NewTimeEntry from './new-time-entry/NewTimeEntry';
import TimeEntries from './time-entries/TimeEntries';
import './time-entry-overview.scss';

class TimeEntryOverview extends React.Component {
  state = { openNewTimeEntry: false };

  handleClick = () => {
    const { openNewTimeEntry } = this.state;
    this.setState(() => ({ openNewTimeEntry: !openNewTimeEntry }));
  };

  render() {
    const { openNewTimeEntry } = this.state;
    return (
      <div>
        <button
          className={`time-entry-button ${openNewTimeEntry ? 'time-entry-button--open' : 'time-entry-button--close'}`}
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
        <NewTimeEntry />
        <TimeEntries />
      </div>
    );
  }
}

export default TimeEntryOverview;
