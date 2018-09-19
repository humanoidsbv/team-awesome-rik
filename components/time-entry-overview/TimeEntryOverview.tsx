import React from 'react';

import { TimeEntryModel } from '../../ducks/time-entries';
import { clientIdAndName } from '../../ducks/clients';
import TimeEntryForm from '../time-entry-form/TimeEntryForm';
import TimeEntries from '../time-entries/TimeEntries';
import PageHeader from '../../shared/components/page-header/PageHeader';
import './time-entry-overview.scss';

interface TimeEntryOverviewProps {
  activeFilter: string;
  addTimeEntry;
  clientsIdAndName: clientIdAndName[];
  deleteTimeEntry;
  filterTimeEntriesSuccess;
  requestTimeEntries;
  timeEntries: TimeEntryModel[];
}

class TimeEntryOverview extends React.Component<TimeEntryOverviewProps, null> {

  componentDidMount() {
    this.props.requestTimeEntries();
  }

  onDelete = (id) => {
    this.props.deleteTimeEntry(id);
  }

  addTimeEntry = (newEntry) => {
    this.props.addTimeEntry(newEntry);
  }

  handleChange = (event) => {
    this.props.filterTimeEntriesSuccess(event.target.value);
  }

  render() {
    const { activeFilter, clientsIdAndName, timeEntries } = this.props;

    return (
      <div className="time-entry-overview">
        <PageHeader
          text="Timesheets"
          summation={timeEntries.length}
          summationText="Entry"
          summationTextPlural="Entries"
          selectBoxes={[
            {
              name: 'timeEntryFilter',
              onChange: this.handleChange,
              options: ['All Clients', ...clientsIdAndName.map((client) => client.name)],
              optionValues: ['', ...clientsIdAndName.map((client) => client.id)],
              value: activeFilter
            }]}
          displaySearchField
        />
        <div className="container">
          <h2 className="time-entry-overview__page-title">
            New time entry
          </h2>
          <TimeEntryForm
            addTimeEntry={this.addTimeEntry}
            clientsIdAndName={clientsIdAndName}
          />
          <TimeEntries
            onDelete={this.onDelete}
            timeEntries={timeEntries}
          />
        </div>
      </div>
    );
  }
}

export default TimeEntryOverview;
