import React from 'react';
import PropTypes from 'prop-types';

import TimeEntryForm from '../time-entry-form/TimeEntryForm';
import TimeEntries from '../time-entries/TimeEntries';
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
          <div className="time-entry-overview__header-title">
            <h1 className="time-entry-overview__header-text"> Timesheets </h1>
            <h2 className="time-entry-overview__header-summation"> 12 entries </h2>
          </div>
          <div className="time-entry-overview__header-search-and-select">
            <select
              onChange={this.handleChange}
              type="select"
              value={activeFilter}

            >
              <option value="">
                All Employers
              </option>
              <option>
                Port of Rotterdam
              </option>
              <option>
                Hike One
              </option>
            </select>
            <input id="search-time-entries" name="searchTimeEntries" />
          </div>
        </div>
        <div className="container">
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
