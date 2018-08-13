import React from 'react';
import NewTimeSheet from './new-timesheet/NewTimeSheet';
import TimeSheets from './sheets/TimeSheets';
import './timesheet-overview.scss';

class TimeSheetOverview extends React.Component {
  state = { openNewTimeSheet: false };

  handleClick = () => {
    this.setState(
      this.toggleOpen
    );
  };

  toggleOpen = (state) => {
    const { openNewTimeSheet } = this.state;
    return {
      ...state,
      openNewTimeSheet: !openNewTimeSheet
    };
  };

  render() {
    const { openNewTimeSheet } = this.state;
    return (
      <div>
        <button className={`timesheet-button ${openNewTimeSheet ? 'timesheet-button--open' : 'timesheet-button--close'}`} type="button" onClick={this.handleClick}>
          <img className="timesheet-button__plus" src="/static/icons/plus.svg" alt="plus" />
          New time entry
        </button>
        <NewTimeSheet />
        <TimeSheets />
      </div>
    );
  }
}

export default TimeSheetOverview;
