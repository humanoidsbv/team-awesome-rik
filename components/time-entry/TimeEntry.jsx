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

  const calculateTimeStampDiff = (fromTime, toTime) => {
    const oneHour = 1000 * 60 * 60;
    return new Date(Date.parse(toTime) - Date.parse(fromTime) - oneHour)
      .toLocaleTimeString({ hc: 'h24' },
        { hour: 'numeric', minute: 'numeric' });
  };

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
