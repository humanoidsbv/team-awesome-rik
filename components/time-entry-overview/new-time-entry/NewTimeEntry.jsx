import React from 'react';

import './new-time-entry.scss';

const NewTimeEntry = () => (
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
          className="form__select-list form__select-list--employer"
          type="select"
        >
          <option>
            Port of Rotterdam
          </option>
        </select>
      </label>
    </div>
    <div className="form__list-item">
      <label id="activity" htmlFor="activity">
        ACTIVITY
        <select
          id="activity"
          className="form__select-list form__select-list--activity"
          type="select"
        >
          <option>
            Design
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
        >
          <option>
            29-07-2018
          </option>
        </select>
      </label>
    </div>
    <div className="form__list-item form__list-item--half">
      <label id="from" htmlFor="from">
        FROM
        <select
          id="from"
          className="form__select-list form__select-list--from"
          type="select"
        >
          <option>
            09:00
          </option>
        </select>
      </label>
      <label id="to" htmlFor="to">
        TO
        <select
          id="to"
          className="form__select-list form__select-list--to"
          type="select"
        >
          <option>
            17:00
          </option>
        </select>
      </label>
    </div>
    <button className="form__button-add" type="submit">
      Add
    </button>
  </form>
);

export default NewTimeEntry;
