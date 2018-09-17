import React from 'react';

import TimeEntry from '../time-entry/TimeEntry';
import { calculateTotalTimePerDay, convertTimeStampToDate } from '../../services/date-time/date-time';
import './time-entries.scss';


const TimeEntries = ({ clientsIdAndName, timeEntries, onDelete }) => (
  timeEntries.map((timeEntry, index) => {
    const date = convertTimeStampToDate(timeEntry.from);
    const previousDate = index && convertTimeStampToDate(timeEntries[index - 1].from);

    return (
      <ul className="time-entries" key={timeEntry.id}>
        {(!index || date !== previousDate)
        && (
          <hgroup className="time-entries__time-entry-header">
            <h1 className="time-entries__date">
              {date}
            </h1>
            <h2 className="time-entries__time">
              {calculateTotalTimePerDay(timeEntries, date)}
            </h2>
          </hgroup>
        )}
        <TimeEntry
          {...timeEntry}
          clientsIdAndName={clientsIdAndName}
          onDelete={onDelete}
        />
      </ul>
    );
  })
);

export default TimeEntries;
