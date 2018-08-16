import React from 'react';
import PropTypes from 'prop-types';

import './time-entry-form.scss';


class TimeEntryForm extends React.Component {
  static propTypes = {
    onNewTimeEntry: PropTypes.func.isRequired
  };

  state = {};

  convertColonToDot = time => time.replace(':', '.')

  convertDateToISO = ({ date }) => {
    const dateSplitted = date.split('-');
    return new Date(
      `${dateSplitted[2]}-${dateSplitted[1]}-${dateSplitted[0]} `
    ).toISOString();
  }

  handleChange = ({ target }) => {
    this.setState(prevState => ({ ...prevState, [target.id]: target.value }));
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
              onChange={event => this.handleChange(event)}
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
              onChange={event => this.handleChange(event)}
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
            <select
              id="date"
              className="form__select-list form__select-list--date"
              type="select"
              onChange={event => this.handleChange(event)}
            >
              <option>
                29-07-2018
              </option>
              <option>
                30-07-2018
              </option>
            </select>
          </label>
        </div>
        <div className="form__list-item form__list-item--half">
          <label id="from" htmlFor="from">
            FROM
            <select
              id="from"
              className="form__select-list"
              type="select"
              onChange={event => this.handleChange(event)}
            >
              <option>
                09:00
              </option>
              <option>
                08:00
              </option>
            </select>
          </label>
          <label id="to" htmlFor="to">
            TO
            <select
              id="to"
              className="form__select-list"
              type="select"
              onChange={event => this.handleChange(event)}
            >
              <option>
                17:00
              </option>
              <option>
                18:00
              </option>
            </select>
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
