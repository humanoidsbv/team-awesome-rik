import React from 'react';

import { TimeEntryModel } from '../../ducks/time-entries';
import { clientIdAndName } from '../../ducks/clients';
import { convertTimeToIso } from '../../services/date-time/date-time';
import SelectBox from '../../shared/components/select-box/SelectBox';
import InputField from '../../shared/components/input-field/InputField';
import './time-entry-form.scss';

interface inputTypes {
  dateIsValid: boolean;
  fromIsValid: boolean;
  toIsValid: boolean;
}

interface TimeEntryFormDefaultState {
  formData: TimeEntryModel;
  inputs: inputTypes;
  isFormLoading: boolean;
  isFormVisible: boolean;
}

interface TimeEntryFormState {
  formData: TimeEntryModel;
  inputs: inputTypes;
  isFormLoading: boolean;
  isFormVisible: boolean;
}

interface TimeEntryFormProps {
  addTimeEntry;
  clientsIdAndName: clientIdAndName[];
}

class TimeEntryForm extends React.Component<TimeEntryFormProps, TimeEntryFormState> {
   inputForm: React.RefObject<HTMLFormElement>;

  private defaultState: TimeEntryFormDefaultState = {
    formData: {
      clientId: 'apple',
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

  constructor(props) {
    super(props);
    this.state = { ...this.defaultState };
    this.inputForm = React.createRef();
  }

  getFormValidity = () => {
    const { inputs } = this.state;
    return (this.inputForm.current
      && Array.from(this.inputForm.current.elements).every((element: HTMLInputElement) => element.validity.valid))
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
    this.setState({ ...this.defaultState });
  }

  render() {
    const { isFormVisible, isFormLoading, formData } = this.state;
    const { clientId, activity } = this.state.formData;
    const { dateIsValid, fromIsValid, toIsValid } = this.state.inputs;
    const { clientsIdAndName } = this.props;
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
                <label id="client" htmlFor="client">
                  <div className="first-row">
                    <label>
                      client
                    </label>
                    <button
                      className="form__button-close"
                      onClick={this.handleClick}
                      type="button"
                    />
                  </div>
                  <SelectBox
                    name="client"
                    onChange={this.handleChange}
                    options={clientsIdAndName.map((client) => client.name)}
                    optionValues={clientsIdAndName.map((client) => client.id)}
                    type="form"
                    value={clientId}
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
