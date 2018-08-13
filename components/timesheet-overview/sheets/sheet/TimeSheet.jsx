import React from 'react';
import PropTypes from 'prop-types';
import './timesheet.scss';


const TimeSheet = ({ employer, from, to }) => {
  TimeSheet.propTypes = {
    employer: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
  };

  return (
    <div className="timesheet">
      <span className="timesheet__item timesheet__item__employer">
        {employer}
      </span>
      <span className="timesheet__item timesheet__item__time">
        {`${from}-${to}`}
      </span>
    </div>
  );
};


export default TimeSheet;
