import React from 'react';
import PropTypes from 'prop-types';

import './time-entry-form.scss';


class TimeEntryForm extends React.Component {
  static defaultState = {
    employer: 'Port of Rotterdam',
    activity: 'Design',
    date: '',
    from: '',
    to: ''
  };

  static propTypes = {
    addTimeEntry: PropTypes.func.isRequired
  };

  state = { ...TimeEntryForm.defaultState };

  convertDotToColon = (time) => time.replace('.', ':')

  convertDateTimeToISO = (stateCopy) => {
    const { date, from, to } = stateCopy;
    const tempDate = this.reformatDateToYMD(date);
    const tempFrom = this.createTimeStamp(tempDate, this.convertDotToColon(from));
    const tempTo = this.createTimeStamp(tempDate, this.convertDotToColon(to));
    return {
      ...stateCopy,
      date: tempDate,
      from: tempFrom,
      to: tempTo
    };
  }

  createTimeStamp = (date, time) => new Date(`${date} ${time}`).toISOString();

  handleChange = ({ target }) => {
    this.setState((prevState) => ({ ...prevState, [target.id]: target.value }));
  }

  handleSubmit = () => {
    const stateCopy = { ...this.state };
    const { addTimeEntry } = this.props;
    addTimeEntry(this.convertDateTimeToISO(stateCopy));
    this.setState({ ...TimeEntryForm.defaultState });
  }

  reformatDateToYMD = (date) => {
    const dateSplitted = date.split('-');
    return `${dateSplitted[2]}-${dateSplitted[1]}-${dateSplitted[0]} `;
  }

  render() {
    return (
      <form className="form">
        <div className="form__list-item form__list-item--first">
          <label id="employer" htmlFor="employer">
            <div className="first-row">
              <span>
                EMPLOYER
              </span>
              <span>
                <div className="form__button-close" />
              </span>
            </div>
            <select
              id="employer"
              className="form__select"
              onChange={(event) => this.handleChange(event)}
            >
              <option>
                Port of Rotterdam
              </option>
              <option>
                Hike One
              </option>
            </select>
          </label>
        </div>
        <div className="form__list-item">
          <label id="activity" htmlFor="activity">
            ACTIVITY
            <select
              id="activity"
              className="form__select"
              onChange={(event) => this.handleChange(event)}
            >
              <option>
                Design
              </option>
              <option>
                Development
              </option>
            </select>
          </label>
        </div>
        <div className="form__list-item form__list-item--date">
          <label id="date" htmlFor="date">
            Date
            <input
              id="date"
              className="form__select form__select--date"
              onChange={(event) => this.handleChange(event)}
              value={this.state.date}
            />
          </label>
        </div>
        <div className="form__list-item form__list-item--half">
          <label id="from" htmlFor="from">
            FROM
            <input
              id="from"
              className="form__select"
              onChange={(event) => this.handleChange(event)}
              value={this.state.from}
            />
          </label>
          <label id="to" htmlFor="to">
            TO
            <input
              id="to"
              className="form__select"
              onChange={(event) => this.handleChange(event)}
              value={this.state.to}
            />
          </label>
        </div>
        <button
          className="form__button-add"
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            this.handleSubmit();
          }}
        >
          Add
        </button>
      </form>
    );
  }
}

export default TimeEntryForm;
