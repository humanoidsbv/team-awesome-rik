import React from 'react';
import PropTypes from 'prop-types';
import calculateTimeStampDiff from '../../services/calculate-timestamp-diff/calculate-timestamp-diff';

import './time-entry.scss';


const TimeEntry = ({ employer, from, to }) => {
  const convertTimeStampToTime = (isoTimeStamp) => (
    new Date(isoTimeStamp).toLocaleTimeString(
      { hc: 'h24' },
      { hour: 'numeric', minute: 'numeric' }
    )
  );

  return (
    <div className="time-entry">
      <span className="employer">
        {employer}
      </span>
      <span className="time">
        <div>
          {`${convertTimeStampToTime(from)}-${convertTimeStampToTime(to)}`}
        </div>
        <div>
          {calculateTimeStampDiff(from, to)}
        </div>
      </span>
    </div>
  );
};

TimeEntry.propTypes = {
  employer: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};

export default TimeEntry;
