import React from 'react';
import PropTypes from 'prop-types';

import { convertTimeToIso } from '../../services/date-time/date-time';
import SelectBox from '../../shared/components/select-box/SelectBox';
import InputField from '../../shared/components/input-field/InputField';
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
      dateIsValid: true,
      fromIsValid: true,
      toIsValid: true
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
      const { from, to } = this.state.formData;
      this.setElementValidity('from',
        Date.parse(`11/20/1988 ${from.replace('.', ':')}`)
        < Date.parse(`11/20/1988 ${to.replace('.', ':')}`));
      this.setElementValidity('to',
        Date.parse(`11/20/1988 ${to.replace('.', ':')}`)
        > Date.parse(`11/20/1988 ${from.replace('.', ':')}`));
    }
  }

  handleBlur = ({ target }) => {
    this.setElementValidity(target.name, target.validity.valid);
    this.checkValidity(target);
  }

  handleChange = ({ target }) => {
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [target.name]: target.value
      }
    }));
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
    const { employer, activity } = this.state.formData;
    const { dateIsValid, fromIsValid, toIsValid } = this.state.inputs;
    return (
      <React.Fragment>
        <button
          className={`time-entry-button
                     time-entry-button${isFormVisible ? '--hidden' : '--visible'}`
                     }
          type="button"
          onClick={this.handleClick}
        >
          New time entry
        </button>
        <form
          onSubmit={this.handleSubmit}
          className={`form ${isFormVisible ? 'form--open' : 'form--close'}`}
          ref={this.inputForm}
        >
          <div className="form-container">
            <div className="time-entry-form">
              <div className="form__list-item">
                <label id="employer" htmlFor="employer">
                  <div className="first-row">
                    <label>
                      employer
                    </label>
                    <button
                      className="form__button-close"
                      onClick={this.handleClick}
                      type="button"
                    />
                  </div>
                  <SelectBox
                    name="employer"
                    onChange={this.handleChange}
                    options={['Port of Rotterdam', 'Hike One']}
                    optionValues={['Port of Rotterdam', 'Hike One']}
                    type="form"
                    value={employer}
                    required
                  />
                </label>
              </div>
              <div className="form__list-item">
                <label id="activity" htmlFor="activity">
                  activity
                  <SelectBox
                    name="activity"
                    options={['Design', 'Development']}
                    optionValues={['Design', 'Development']}
                    onChange={this.handleChange}
                    type="form"
                    value={activity}
                    required
                  />
                </label>
              </div>
              <div className="form__list-item">
                <label htmlFor="date">
                  date
                  <InputField
                    name="date"
                    isValid={dateIsValid}
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    value={formData.date}
                    required
                    pattern="(0[1-9]|[12][0-9]|3[01])[-](0[1-9]|1[0-2])[-]([0-9]{4})"
                  />
                </label>
              </div>
              <div className="form__list-item form__list-item--half">
                <label className="form__label-from" id="from" htmlFor="from">
                  from
                  <InputField
                    isValid={fromIsValid}
                    name="from"
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    pattern="([0-9]{2})[:\s.]([0-9]{2})"
                    required
                    value={formData.from}
                  />
                </label>
                <label id="to" htmlFor="to">
                  to
                  <InputField
                    isValid={toIsValid}
                    name="to"
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    pattern="([0-9]{2})[:\s.]([0-9]{2})"
                    required
                    value={formData.to}
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
