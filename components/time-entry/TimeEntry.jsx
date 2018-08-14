import React from 'react';
import PropTypes from 'prop-types';

import './time-entry.scss';


const TimeEntry = ({ employer, from, to }) => (
  <div className="time-entry">
    <span>
      {employer}
    </span>
    <span>
      {`${from}-${to}`}
    </span>
  </div>
);

TimeEntry.propTypes = {
  employer: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};

export default TimeEntry;
