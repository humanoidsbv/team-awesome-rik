import React from 'react';

import TimeEntry from '../time-entry/TimeEntry';
import mockTimeEntry from './mockTimeEntry.json';
import './time-entries.scss';


const TimeEntries = () => (
  mockTimeEntry.map((currentEntry, index, arr) => (
    (index > 0 && currentEntry.date === arr[index - 1].date)
      ? (<TimeEntry {... currentEntry} />)
      : (
        <React.Fragment>
          {currentEntry.date}
          <TimeEntry {... currentEntry} />
        </React.Fragment>)))

);

export default TimeEntries;
