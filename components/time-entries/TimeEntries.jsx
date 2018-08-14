import React from 'react';

import TimeEntry from '../time-entry/TimeEntry';
import mockTimeEntry from './mockTimeEntry.json';
import './time-entries.scss';


const TimeEntries = () => (
  mockTimeEntry.map((currentEntry, index, arr) => (
    <React.Fragment>
      {(!index || currentEntry.date !== arr[index - 1].date) && currentEntry.date}
      <TimeEntry {... currentEntry} />
    </React.Fragment>
  ))
);

export default TimeEntries;
