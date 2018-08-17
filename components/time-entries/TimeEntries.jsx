import React from 'react';

import TimeEntry from '../time-entry/TimeEntry';
import './time-entries.scss';


const TimeEntries = ({ timeEntries }) => {
  const convertTimeStampToDate = (isoTimeStamp) => (
    new Date(isoTimeStamp).toLocaleDateString('nl-NL')
  );

  return (
    timeEntries.map((timeEntry, index) => (
      <React.Fragment key={timeEntry.id}>
        {(!index
          || convertTimeStampToDate(timeEntry.from)
          !== convertTimeStampToDate(timeEntries[index - 1].from)
        )
          && convertTimeStampToDate(timeEntry.from)}
        <TimeEntry {...timeEntry} />
      </React.Fragment>
    ))
  );
};

export default TimeEntries;
