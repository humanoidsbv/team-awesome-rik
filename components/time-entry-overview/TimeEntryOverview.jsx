import React from 'react';
import PropTypes from 'prop-types';

import TimeEntryForm from '../time-entry-form/TimeEntryForm';
import TimeEntries from '../time-entries/TimeEntries';
import './time-entry-overview.scss';

class TimeEntryOverview extends React.Component {
  static propTypes = {
    addTimeEntry: PropTypes.func.isRequired,
    deleteTimeEntry: PropTypes.func.isRequired,
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

  render() {
    const { timeEntries } = this.props;

    return (
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
    );
  }
}

export default TimeEntryOverview;
