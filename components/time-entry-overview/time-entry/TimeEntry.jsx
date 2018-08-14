import React from 'react';
import PropTypes from 'prop-types';

import './time-entry.scss';


const TimeEntry = ({ employer, from, to }) => {
  TimeEntry.propTypes = {
    employer: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
  };

  return (
    <div className="time-entry">
      <span className="time-entry__item time-entry__item__employer">
        {employer}
      </span>
      <span className="time-entry__item time-entry__item__time">
        {`${from}-${to}`}
      </span>
    </div>
  );
};


export default TimeEntry;
