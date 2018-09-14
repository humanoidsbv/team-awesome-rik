import React from 'react';
import PropTypes from 'prop-types';

import TimeEntryForm from '../time-entry-form/TimeEntryForm';
import TimeEntries from '../time-entries/TimeEntries';
import PageHeader from '../../shared/components/page-header/PageHeader';
import './time-entry-overview.scss';

class TimeEntryOverview extends React.Component {
  static propTypes = {
    activeFilter: PropTypes.string.isRequired,
    addTimeEntry: PropTypes.func.isRequired,
    deleteTimeEntry: PropTypes.func.isRequired,
    filterTimeEntriesSuccess: PropTypes.func.isRequired,
    requestTimeEntries: PropTypes.func.isRequired,
    timeEntries: PropTypes.arrayOf(PropTypes.shape({
      employer: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      from: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired
    })).isRequired
  }

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
    const { activeFilter, timeEntries } = this.props;

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
              options: ['All Employers', 'Port of Rotterdam', 'Hike One'],
              optionValues: ['', 'Port of Rotterdam', 'Hike One'],
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
            changeFormVisibility={this.changeFormVisibility}
          />
          <TimeEntries
            timeEntries={timeEntries}
            onDelete={this.onDelete}
          />
        </div>
      </div>
    );
  }
}

export default TimeEntryOverview;
