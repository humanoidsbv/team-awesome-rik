import React from 'react';

import TimeEntry from '../time-entry/TimeEntry';
import './time-entries.scss';


const TimeEntries = ({ timeEntries, deleteCurrentEntry }) => {
  const convertTimeStampToDate = (isoTimeStamp) => (
    new Date(isoTimeStamp)
      .toLocaleDateString('en-NL', { weekday: 'long', day: 'numeric', month: 'numeric' })
      .replace('/', '-').replace(',', ' ')
  );

  return (
    timeEntries.map((timeEntry, index) => (
      <React.Fragment key={timeEntry.id}>
        {(
          !index
          || convertTimeStampToDate(timeEntry.from)
          !== convertTimeStampToDate(timeEntries[index - 1].from)
        )
        && (
          <div className="date">
            {convertTimeStampToDate(timeEntry.from)}
          </div>
        )}
        <TimeEntry
          {...timeEntry}
          deleteCurrentEntry={deleteCurrentEntry}
        />
      </React.Fragment>
    ))
  );
};

export default TimeEntries;
