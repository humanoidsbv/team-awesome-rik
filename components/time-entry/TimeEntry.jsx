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
      <div className="time-entry">
        <span className="employer">
          <span>
            {employer}
          </span>
          <button
            className="delete-entry"
            onClick={this.handleClick}
            type="button"
          >
            <span className="stop-sign" />
            <span>
              Delete
            </span>
          </button>
        </span>
        <span className="time">
          <div>
            {`${convertTimeStampToTime(from)}-${convertTimeStampToTime(to)}`}
          </div>
          <div className="time-calculated">
            {calculateTimestampDiff(from, to)}
          </div>
        </span>
      </div>
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
