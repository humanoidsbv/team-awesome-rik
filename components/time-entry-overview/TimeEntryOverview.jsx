import React from 'react';
import mockTimeEntry from './mockTimeEntry.json';
import TimeEntryForm from '../time-entry-form/TimeEntryForm';
import TimeEntries from '../time-entries/TimeEntries';
import './time-entry-overview.scss';

class TimeEntryOverview extends React.Component {
  state = { isTimeEntryFormOpen: false, mockTimeEntry };

  handleClick = () => {
    this.setState(({ isTimeEntryFormOpen }) => ({ isTimeEntryFormOpen: !isTimeEntryFormOpen }));
  };

  // handleSubmit = (newEntry) => {
  //   let updatedTimeEntry = []
  //   this.setState(state => ({...state, mockTimeEntry: () }));
  // };


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
        <TimeEntryForm handleSubmit={this.handleSubmit} />
        <TimeEntries {...this.state} />
      </React.Fragment>
    );
  }
}

export default TimeEntryOverview;
