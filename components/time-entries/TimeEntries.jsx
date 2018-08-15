import React from 'react';

import TimeEntry from '../time-entry/TimeEntry';
import './time-entries.scss';


const TimeEntries = ({ mockTimeEntry }) => (
  mockTimeEntry.map((currentEntry, index, mockEntries) => (
    <React.Fragment key={currentEntry.id}>
      {(!index || currentEntry.date !== mockEntries[index - 1].date) && currentEntry.date}
      <TimeEntry {...currentEntry} />
    </React.Fragment>
  ))
);

export default TimeEntries;
