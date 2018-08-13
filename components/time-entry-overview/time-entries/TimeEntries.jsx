import React from 'react';

import TimeEntry from '../time-entry/TimeEntry';
import mockTimeEntry from './mockTimeEntry.json';
import './time-entries.scss';


const TimeEntries = () => {
  const timeentries = mockTimeEntry.map(({
    employer, from, to, id
  }) => (
    <TimeEntry employer={employer} from={from} to={to} key={id} />
  ));

  return (
    timeentries
  );
};

export default TimeEntries;
