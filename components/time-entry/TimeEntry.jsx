import React from 'react';
import PropTypes from 'prop-types';
import { calculateTimestampDiff, convertTimeStampToTime } from '../../services/date-time/date-time';

import './time-entry.scss';


const TimeEntry = ({
  id, employer, from, to, deleteCurrentEntry
}) => {
  const handleCLick = () => {
    deleteCurrentEntry(id);
  };

  return (
    <div className="time-entry">
      <span className="employer">
        <span>
          {employer}
        </span>
        <button
          className="delete-entry"
          onClick={handleCLick}
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
        <div>
          {calculateTimestampDiff(from, to)}
        </div>
      </span>
    </div>
  );
};

TimeEntry.propTypes = {
  deleteCurrentEntry: PropTypes.func.isRequired,
  employer: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  to: PropTypes.string.isRequired
};

export default TimeEntry;
