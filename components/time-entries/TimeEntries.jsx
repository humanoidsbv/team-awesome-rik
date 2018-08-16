import React from 'react';

import TimeEntry from '../time-entry/TimeEntry';
import './time-entries.scss';


const TimeEntries = ({ timeEntries }) => {
  const convertTimeStampToDate = (isoTimeStamp) => (
    `${new Date(isoTimeStamp).toLocaleDateString('nl-NL')}`
  );

  return (
    timeEntries.map((currentEntry, index, mockEntries) => (
      <React.Fragment key={currentEntry.id}>
        {(!index
          || convertTimeStampToDate(currentEntry.from)
          !== convertTimeStampToDate(mockEntries[index - 1].from)
        )
          && convertTimeStampToDate(currentEntry.from)}
        <TimeEntry {...currentEntry} />
      </React.Fragment>
    ))
  );
};

export default TimeEntries;
