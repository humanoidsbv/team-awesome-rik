import React from 'react';

import TimeEntry from '../time-entry/TimeEntry';
import { calculateTotalTimePerDay, convertTimeStampToDate } from '../../services/date-time/date-time';
import './time-entries.scss';


const TimeEntries = ({ timeEntries, onDelete }) => (
  timeEntries.map((timeEntry, index) => {
    const date = convertTimeStampToDate(timeEntry.from);
    const previousDate = index && convertTimeStampToDate(timeEntries[index - 1].from);

    return (
      <React.Fragment key={timeEntry.id}>
        {(!index || date !== previousDate)
        && (
          <div className="date-row">
            <span>
              {date}
            </span>
            <span className="time">
              {calculateTotalTimePerDay(timeEntries, date)}
            </span>
          </div>
        )}
        <TimeEntry
          {...timeEntry}
          onDelete={onDelete}
        />
      </React.Fragment>
    );
  })
);

export default TimeEntries;
