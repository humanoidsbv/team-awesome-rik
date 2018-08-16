import React from 'react';
import PropTypes from 'prop-types';

import './time-entry-form.scss';


class TimeEntryForm extends React.Component {
  static propTypes = {
    onNewTimeEntry: PropTypes.func.isRequired
  };

  state = {
    employer: 'Port of Rotterdam',
    activity: 'Design',
    date: '2018-07-30',
    from: '08:30',
    to: '17:30'
  };

  convertDotToColon = (time) => time.replace('.', ':')

  reformatDateToYMD = (date) => {
    const dateSplitted = date.split('-');
    return `${dateSplitted[2]}-${dateSplitted[1]}-${dateSplitted[0]} `;
  }

  createTimeStamp = (date, time) => new Date(`${date} ${time}`).toISOString();

  handleChange = ({ target }) => {
    const { date } = this.state;
    const dateValue = target.id === 'date' && this.reformatDateToYMD(target.value);
    const timeValue = (target.id === 'from' || target.id === 'to')
      && this.createTimeStamp(date, this.convertDotToColon(target.value));
    const value = dateValue || timeValue || target.value;

    this.setState((prevState) => ({ ...prevState, [target.id]: value }));
  }

  handleSubmit = () => {
    const { onNewTimeEntry } = this.props;
    onNewTimeEntry(this.state);
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
              className="form__select-list"
              type="select"
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
              className="form__select-list"
              type="select"
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
              className="form__select-list form__select-list--date"
              type="select"
              onChange={(event) => this.handleChange(event)}
            />
          </label>
        </div>
        <div className="form__list-item form__list-item--half">
          <label id="from" htmlFor="from">
            FROM
            <input
              id="from"
              className="form__select-list"
              type="select"
              onChange={(event) => this.handleChange(event)}
            />
          </label>
          <label id="to" htmlFor="to">
            TO
            <input
              id="to"
              className="form__select-list"
              type="select"
              onChange={(event) => this.handleChange(event)}
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
