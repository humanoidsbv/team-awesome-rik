import React from 'react';
import PropTypes from 'prop-types';

import TimeEntryForm from '../time-entry-form/TimeEntryForm';
import TimeEntries from '../time-entries/TimeEntries';
import SearchField from '../../shared/components/search-field/SearchField';
import SelectBox from '../../shared/components/select-box/SelectBox';
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

  addTimeEntry = (newEntry) => (
    this.props.addTimeEntry(newEntry)
  )

  handleChange = (event) => {
    this.props.filterTimeEntriesSuccess(event.target.value);
  }

  render() {
    const { activeFilter, timeEntries } = this.props;

    return (
      <div className="time-entry-overview">
        <div className="time-entry-overview__header">
          <div className="time-entry-overview__header-left-side">
            <h1 className="time-entry-overview__header-text"> Timesheets </h1>
            <div className="time-entry-overview__header-divider" />
            <h2 className="time-entry-overview__header-summation"> 12 entries </h2>
          </div>
          <div className="time-entry-overview__header-right-side">
            <SelectBox
              onChange={this.handleChange}
              options={['All Employers', 'Port of Rotterdam', 'Hike One']}
              optionValues={['', 'Port of Rotterdam', 'Hike One']}
              value={activeFilter}
            />
            <SearchField />
          </div>
        </div>
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
