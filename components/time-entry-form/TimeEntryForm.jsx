import React from 'react';
import PropTypes from 'prop-types';

import { convertTimeToIso } from '../../services/date-time/date-time';
import './time-entry-form.scss';


class TimeEntryForm extends React.Component {
  static defaultState = {
    formData: {
      employer: 'Port of Rotterdam',
      activity: 'Design',
      date: '',
      from: '',
      to: ''
    },
    inputs: {
      fromIsValid: false,
      toIsValid: false
    },
    isFormVisible: false,
    isFormLoading: false
  };

  static propTypes = {
    addTimeEntry: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = { ...TimeEntryForm.defaultState };
    this.fromInput = React.createRef();
    this.toInput = React.createRef();
    this.inputForm = React.createRef();
  }

  getFormValidity = () => {
    const { inputs } = this.state;
    return (this.inputForm.current
      && Array.from(this.inputForm.current.elements).every((element) => element.validity.valid))
      && (inputs.fromIsValid && inputs.toIsValid);
  }

  setElementValidity = (name, isValid) => {
    this.setState(
      (prevState) => ({
        ...prevState,
        inputs: {
          ...prevState.inputs,
          [`${name}IsValid`]: isValid
        }
      })
    );
  }

  checkValidity = ({ name }) => {
    if (name === 'from' || name === 'to') {
      this.setElementValidity('from',
        Date.parse(`11/20/1988 ${this.fromInput.current.value.replace('.', ':')}`)
        < Date.parse(`11/20/1988 ${this.toInput.current.value.replace('.', ':')}`));
      this.setElementValidity('to',
        Date.parse(`11/20/1988 ${this.toInput.current.value.replace('.', ':')}`)
        > Date.parse(`11/20/1988 ${this.fromInput.current.value.replace('.', ':')}`));
    }
  }

  handleChange = ({ target }) => {
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [target.name]: target.value
      }
    }), () => this.checkValidity(target));
  }

  handleClick = () => {
    this.setState((prevState) => ({
      ...prevState,
      isFormVisible: !prevState.isFormVisible
    }));
  }

  handleSubmit = () => {
    const { addTimeEntry } = this.props;
    const { formData } = this.state;
    const { date, from, to } = formData;

    this.setState(({ isFormLoading }) => ({
      isFormLoading: !isFormLoading
    }));

    addTimeEntry({ ...formData, ...convertTimeToIso(date, from, to) });
    this.setState({ ...TimeEntryForm.defaultState });
  }

  render() {
    const { isFormVisible, isFormLoading, formData } = this.state;
    const { fromIsValid, toIsValid } = this.state.inputs;
    return (
      <React.Fragment>
        <button
          className={`time-entry-button
                     ${isFormVisible ? 'time-entry-button--hidden' : 'time-entry-button--visible'}`
                     }
          type="button"
          onClick={this.handleClick}
        >
          <img
            className="time-entry-button__plus"
            src="/static/icons/plus.svg"
            alt="plus"
          />
          New time entry
        </button>
        <form
          onSubmit={this.handleSubmit}
          className={`form ${isFormVisible ? 'form--open' : 'form--close'}`}
          ref={this.inputForm}
        >
          <div className="form-container">
            <div className="form-inputs">
              <div className="form__list-item form__list-item--first">
                <label id="employer" htmlFor="employer">
                  <div className="first-row">
                    <span>
                      EMPLOYER
                    </span>
                    <button
                      className="form__button-close"
                      onClick={this.handleClick}
                      type="button"
                    />
                  </div>
                  <select
                    id="employer"
                    name="employer"
                    className="form__select"
                    onChange={(event) => this.handleChange(event)}
                    required
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
                    name="activity"
                    className="form__select"
                    onChange={(event) => this.handleChange(event)}
                    required
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
                    name="date"
                    className="form__select form__select--date"
                    onChange={(event) => this.handleChange(event)}
                    value={formData.date}
                    required
                    pattern="(0[1-9]|[12][0-9]|3[01])[-](0[1-9]|1[0-2])[-]([0-9]{4})"
                    ref={this.dateInput}
                  />
                </label>
              </div>
              <div className="form__list-item form__list-item--half">
                <label id="from" htmlFor="from">
                  FROM
                  <input
                    id="from"
                    name="from"
                    className={`form__select ${fromIsValid ? '' : 'invalid-input'}`}
                    onChange={(event) => this.handleChange(event)}
                    value={formData.from}
                    required
                    pattern="([0-9]{2})[:\s.]([0-9]{2})"
                    ref={this.fromInput}
                  />
                </label>
                <label id="to" htmlFor="to">
                  TO
                  <input
                    id="to"
                    name="to"
                    className={`form__select ${toIsValid ? '' : 'form__select--invalid'}`}
                    onChange={(event) => this.handleChange(event)}
                    value={formData.to}
                    required
                    pattern="([0-9]{2})[:\s.]([0-9]{2})"
                    ref={this.toInput}
                  />
                </label>
              </div>
            </div>
            <button
              className={`form__button-add ${!this.getFormValidity() && 'invalid-form'}`}
              disabled={!this.getFormValidity() || isFormLoading}
              type="submit"
              onClick={(event) => {
                event.preventDefault();
                this.handleSubmit();
              }}
            >
              Add
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default TimeEntryForm;
