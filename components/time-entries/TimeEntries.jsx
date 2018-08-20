import React from 'react';

import TimeEntry from '../time-entry/TimeEntry';
import './time-entries.scss';


const TimeEntries = ({ timeEntries }) => {
  const convertTimeStampToDate = (isoTimeStamp) => (
    new Date(isoTimeStamp)
      .toLocaleDateString('en-NL', { weekday: 'long', day: 'numeric', month: 'numeric' })
      .replace('/', '-').replace(',', ' ')
  );

  /*
  const addedTimes
  datum !== vorige datum:
    for over RESTERENDE DEEL(let i = index) oorspronkelijke map
      is datum !== vorige datum:  addedTimes = timeStampDiff[huidigeDatum]
      is datum === vorige datum:  addedTimes += timeStampDiff[huidigeDatum];
    <div date>{addedTimes}</div>
  */
  return (
    timeEntries.map((timeEntry, index) => (
      <React.Fragment key={timeEntry.from}>
        {(!index
          || convertTimeStampToDate(timeEntry.from)
          !== convertTimeStampToDate(timeEntries[index - 1].from)
        )
          && (
          <div className="date">
            {convertTimeStampToDate(timeEntry.from)}
          </div>
          )}
        <TimeEntry {...timeEntry} />
      </React.Fragment>
    ))
  );
};

export default TimeEntries;
