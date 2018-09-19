import React from 'react';

import TimeEntry from '../time-entry/TimeEntry';
import { TimeEntryModel } from '../../ducks/time-entries';
import { calculateTotalTimePerDay, convertTimeStampToDate } from '../../services/date-time/date-time';
import './time-entries.scss';

interface TimeEntriesTypes {
  timeEntries: TimeEntryModel[];
  onDelete;
}

const TimeEntries = ({ timeEntries, onDelete }: TimeEntriesTypes) => (
  timeEntries.map(( timeEntry: TimeEntryModel, index) => {
    const date = convertTimeStampToDate(timeEntry.from);
    const previousDate = index && convertTimeStampToDate(timeEntries[index - 1].from);

    return (
      <ul className="time-entries" key={timeEntry.id}>
        {(!index || date !== previousDate)
        && (
          <hgroup className="time-entries__time-entry-header">
            <h3 className="time-entries__date">
              {date}
            </h3>
            <h3 className="time-entries__time">
              {calculateTotalTimePerDay(timeEntries, date)}
            </h3>
          </hgroup>
        )}
        <TimeEntry
          {...timeEntry}
          onDelete={onDelete}
        />
      </ul>
    );
  })
);

export default TimeEntries;
