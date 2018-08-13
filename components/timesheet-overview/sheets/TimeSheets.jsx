import React from 'react';
import TimeSheet from './sheet/TimeSheet';
import './timesheets.scss';
import mockTimeSheet from './mockTimeSheet.json';

const TimeSheets = () => {
  const timesheets = mockTimeSheet.map(({
    employer, from, to, id
  }) => (
    <TimeSheet employer={employer} from={from} to={to} key={id} />
  ));

  return (
    timesheets
  );
};

export default TimeSheets;
