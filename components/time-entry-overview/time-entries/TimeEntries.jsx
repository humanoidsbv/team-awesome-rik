import React from 'react';

import TimeEntry from '../time-entry/TimeEntry';
import mockTimeEntry from './mockTimeEntry.json';
import './time-entries.scss';


const TimeEntries = () => {
  const timeEntries = mockTimeEntry.map((currentEntry, index, arr) => {
    if (index === 0) {
      return (
        <React.Fragment>
          {currentEntry.date}
          <TimeEntry {... currentEntry} />
        </React.Fragment>
      );
    }
    if (currentEntry.date === arr[index - 1].date) {
      return (<TimeEntry {... currentEntry} />);
    }
    return (
      <React.Fragment>
        {currentEntry.date}
        <TimeEntry {... currentEntry} />
      </React.Fragment>);
  });

  return (
    timeEntries
  );
};

export default TimeEntries;
