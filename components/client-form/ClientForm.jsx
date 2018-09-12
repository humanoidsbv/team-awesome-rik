import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import PropTypes from 'prop-types';

import './client-form.scss';

class ClientForm extends React.Component {
  static defaultState = {
    formData: {
      name: 'Humanoids',
      kvk: 69529760,
      remarks: 'Groot Handelsgebouw Unit D1.115.3',
      address: 'Stationsplein 45',
      zipCode: '3013AK',
      city: 'Rotterdam',
      phone: '010 2613201',
      email: 'info@humanoids.nl',
      site: 'www.humanoids.nl',
      logo: 'static/avatar.jpg'
    }
  }

  static propTypes = {
    addClient: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.state = { ...ClientForm.defaultState };
    this.inputForm = React.createRef();
  }


  handleChange = ({ target }) => {
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [target.name]: target.value
      }
    }));
  }

  handleSubmit = (event) => {
    const { addClient } = this.props;
    const { formData } = this.state;
    event.preventDefault();

    if (this.inputForm.current
        && Array.from(this.inputForm.current.elements)
          .every((element) => element.validity.valid)) {
      addClient({ ...formData });
      this.setState({ ...ClientForm.defaultState });
    }
    Router.push('/clients');
  }

  render() {
    const { formData } = this.state;
    return (
      <div className="container">
        <div className="client-form__title-bar">
          <span>
            Add a new client
          </span>
          <span className="client-form__title-bar-buttons">
            <Link href="/clients">
              <button
                className="client-form__cancel-button"
                type="button"
              >
                Cancel
              </button>
            </Link>
            <button
              className="client-form__submit-button"
              onClick={this.handleSubmit}
              type="submit"
            >
              Save
            </button>
          </span>
        </div>
        <div className="client-form">
          <div className="client-form__header">
            <div className="client-form__header__item">
                Client Details
            </div>
          </div>
          <form
            className="client-form__general"
            onSubmit={this.handleSubmit}
            ref={this.inputForm}
          >
            <div className="client-form__general-left-column">
              <img
                className="client-form__general-left-column-picture"
                src="static/avatar.jpg"
                alt="profile"
              />
              <div className="client-form__general-left-column-text">
                Edit Avatar
              </div>
            </div>
            <div className="client-form__general-middle-column">
              <label
                className="client-form__label"
                id="name"
                htmlFor="name"
              >
                Company Name
                <input
                  className="client-form__input"
                  name="name"
                  id="name"
                  required
                  onChange={this.handleChange}
                  value={formData.name}
                />
              </label>
              <label
                className="client-form__label"
                id="kvk"
                htmlFor="kvk"
              >
                  KvK number
                <input
                  className="client-form__input"
                  name="kvk"
                  id="kvk"
                  required
                  onChange={this.handleChange}
                  value={formData.kvk}
                />
              </label>
              <label
                className="client-form__label"
                id="remarks"
                htmlFor="remarks"
              >
                Remarks
                <textarea
                  className="client-form__text-field"
                  name="remarks"
                  id="remarks"
                  required
                  onChange={this.handleChange}
                  value={formData.remarks}
                />
              </label>
            </div>
            <div className="client-form__general-right-column">
              <label
                className="client-form__label"
                id="address"
                htmlFor="address"
              >
                Address
                <input
                  className="client-form__input"
                  name="address"
                  id="address"
                  required
                  onChange={this.handleChange}
                  value={formData.address}
                />
              </label>
              <div className="client-form__general-row">
                <label
                  className="client-form__label client-form__label-half"
                  id="zip-code"
                  htmlFor="zip-code"
                >
                    ZIP code
                  <input
                    className="client-form__input"
                    name="zipCode"
                    id="zip-code"
                    required
                    onChange={this.handleChange}
                    value={formData.zipCode}
                  />
                </label>
                <label
                  className="client-form__label"
                  id="city"
                  htmlFor="city"
                >
                    City
                  <input
                    className="client-form__input"
                    name="city"
                    id="city"
                    required
                    onChange={this.handleChange}
                    value={formData.city}
                  />
                </label>
              </div>
              <div className="client-form__general-contact-details">
                <label className="client-form__label">
                  Contact Details
                </label>
                <div className="client-form__general-row">
                  <span className="client-form__general-light-logo">
                    <img
                      className="client-form__general-svg"
                      src="/static/icons/phone.svg"
                      alt="Phone"
                    />
                  </span>
                  <input
                    className="client-form__input client-form__input-contact"
                    name="phone"
                    id="phone"
                    onChange={this.handleChange}
                    value={formData.phone}
                  />
                </div>
                <div className="client-form__general-row">
                  <span className="client-form__general-dark-logo">
                    <img
                      className="client-form__general-svg"
                      src="/static/icons/email.svg"
                      alt="Email"
                    />
                  </span>
                  <input
                    className="client-form__input client-form__input-contact "
                    name="email"
                    id="email"
                    onChange={this.handleChange}
                    value={formData.email}
                  />
                </div>
                <div className="client-form__general-row">
                  <span className="client-form__general-light-logo">
                    <img
                      className="client-form__general-svg"
                      src="/static/icons/web.svg"
                      alt="Website"
                    />
                  </span>
                  <input
                    className="client-form__input client-form__input-contact "
                    name="site"
                    id="site"
                    onChange={this.handleChange}
                    value={formData.site}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ClientForm;
