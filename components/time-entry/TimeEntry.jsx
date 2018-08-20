import React from 'react';
import PropTypes from 'prop-types';

import './time-entry.scss';


const TimeEntry = ({ employer, from, to }) => {
  const convertTimeStampToTime = (isoTimeStamp) => (
    new Date(isoTimeStamp).toLocaleTimeString(
      { hc: 'h24' },
      { hour: 'numeric', minute: 'numeric' }
    )
  );

  const calculateTimeStampDiff = (fromTime, toTime) => (
    new Date((toTime - fromTime)).toLocaleTimeString(
      { hc: 'h24' },
      { hour: 'numberic', minute: 'numeric' }
    )
  );

  return (
    <div className="time-entry">
      <span className="employer">
        {employer}
      </span>
      <span className="time">
        {`${convertTimeStampToTime(from)}-${convertTimeStampToTime(to)}`}
        {calculateTimeStampDiff(from, to)}
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
