import React from 'react';

import { TimeEntryModel } from '../../ducks/time-entries';
import { calculateTimestampDiff, convertTimeStampToTime } from '../../services/date-time/date-time';
import './time-entry.scss';

interface TimeEntryTypes {
  id?: TimeEntryModel["id"];
  from: TimeEntryModel["from"];
  to: TimeEntryModel["to"];
  clientName?: TimeEntryModel["clientName"];
  onDelete;
}

class TimeEntry extends React.Component<TimeEntryTypes, null> {
  handleClick = () => {
    const { id, onDelete } = this.props;
    const result = window.confirm('Are you sure you want to delete this item?');
    if (result) {
      onDelete(id);
    }
  };


  render() {
    const {
      clientName, from, to
    } = this.props;
    return (
      <li className="time-entry">
        <section className="time-entry__section">
          <h1 className="time-entry__client">
            {clientName}
          </h1>
          <button
            className="time-entry__delete-button"
            onClick={this.handleClick}
            type="button"
          >
            <div className="time-entry__stop-sign" />
            <h2 className="time-entry__stop-text">
              Delete
            </h2>
          </button>
        </section>
        <section className="time-entry__section time-entry__section--last">
          <h2 className="time-entry__time">
            {`${convertTimeStampToTime(from)}-${convertTimeStampToTime(to)}`}
          </h2>
          <h2 className="time-entry__time-calculated">
            {calculateTimestampDiff(from, to)}
          </h2>
        </section>
      </li>
    );
  }
}

export default TimeEntry;
