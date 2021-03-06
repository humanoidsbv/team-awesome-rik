import React from 'react';
import PropTypes from 'prop-types';
import { calculateTimestampDiff, convertTimeStampToTime } from '../../services/date-time/date-time';

import './time-entry.scss';


class TimeEntry extends React.Component {
  handleClick = () => {
    const { id, onDelete } = this.props;
    const result = window.confirm('Are you sure you want to delete this item?');
    if (result) {
      onDelete(id);
    }
  };

  render() {
    const { employer, from, to } = this.props;
    return (
      <li className="time-entry">
        <section className="time-entry__section">
          <h1 className="time-entry__employer">
            {employer}
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

TimeEntry.propTypes = {
  onDelete: PropTypes.func.isRequired,
  employer: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  to: PropTypes.string.isRequired
};

export default TimeEntry;
