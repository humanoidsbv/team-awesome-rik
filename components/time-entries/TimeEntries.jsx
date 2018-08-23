import React from 'react';

import TimeEntry from '../time-entry/TimeEntry';
import { convertTimeStampToDate } from '../../services/date-time/date-time';
import './time-entries.scss';


const TimeEntries = ({ timeEntries, onDelete }) => (
  timeEntries.map((timeEntry, index) => {
    const date = convertTimeStampToDate(timeEntry.from);
    const previousDate = index && convertTimeStampToDate(timeEntries[index - 1].from);

    return (
      <React.Fragment key={timeEntry.id}>
        {(!index || date !== previousDate)
        && (
          <div className="date">
            {date}
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
