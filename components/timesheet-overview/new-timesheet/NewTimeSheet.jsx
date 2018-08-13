import React from 'react';
import './new-timesheet.scss';

const NewTimeEntry = () => (
  <form className="form">
    <div>
      <label id="employer" htmlFor="employer">
      Employer
        <select id="employer" className="form__select-list form__select-list--employer" type="select">
          <option>
            Port of Rotterdam
          </option>
        </select>
      </label>
    </div>
    Activity
    <select className="form__select-list form__select-list--activity" type="select">
      <option>
        Design
      </option>
    </select>
    Date
    <select className="form__select-list form__select-list--date" type="select">
      <option>
        29-07-2018
      </option>
    </select>
    <div>
      FROM
      TO
    </div>
    <div className="half-width">
      <select className="form__select-list form__select-list--from" type="select">
        <option>
          09:00
        </option>
      </select>
      <select className="form__select-list form__select-list--to" type="select">
        <option>
          17:00
        </option>
      </select>
    </div>
    <button className="form__button-add" type="submit">
      Add
    </button>
  </form>
);

export default NewTimeEntry;
