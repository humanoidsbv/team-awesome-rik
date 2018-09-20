import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import './team-member-form.scss';

class TeamMemberForm extends React.Component {
  static defaultState = {
    formData: {
      employeeNumber: 'HUM_007',
      currentEmployer: 'Humanoids',
      profession: 'Developer',
      startDate: '2018-08-06T07:00:00.000Z',
      firstName: 'Rik',
      lastName: 'Frieling',
      email: 'rikfrieling@gmail.com',
      bio: 'Houdt van lange strandwandelingen en leuke dingen doen met vrienden',
      address: 'Hamburgerstraat 14bis',
      zipCode: '3512 NR',
      city: 'Utrecht',
      twitter: '/rikker',
      facebook: '/rikBook',
      picture: '/static/rik.jpg'
    }
  }

  static propTypes = {
    addTeamMember: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.state = { ...TeamMemberForm.defaultState };
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
    const { addTeamMember } = this.props;
    const { formData } = this.state;
    event.preventDefault();

    if (this.inputForm.current
        && Array.from(this.inputForm.current.elements)
          .every((element) => element.validity.valid)) {
      addTeamMember({ ...formData });
      this.setState({ ...TeamMemberForm.defaultState });
    }
  }

  render() {
    const { formData } = this.state;
    return (
      <div className="container">
        <div className="team-member-form__title-bar">
          <span>
            Add a new team member
          </span>
          <span className="team-member-form__title-bar-buttons">
            <Link href="/team-members">
              <button
                className="team-member-form__cancel-button"
                type="button"
              >
                Cancel
              </button>
            </Link>
            <button
              className="team-member-form__submit-button"
              onClick={this.handleSubmit}
              type="submit"
            >
              Save
            </button>
          </span>
        </div>
        <div className="team-member-form">
          <div className="team-member-form__header">
            <div className="team-member-form__header__item">
                Personal Details
            </div>
          </div>
          <form
            className="team-member-form__personal"
            onSubmit={this.handleSubmit}
            ref={this.inputForm}
          >
            <div className="team-member-form__personal-left-column">
              <img
                className="team-member-form__personal-left-column-picture"
                src="static/rik.jpg"
                alt="profile"
              />
              <div className="team-member-form__personal-left-column-text">
                Edit Avatar
              </div>
            </div>
            <div className="team-member-form__personal-middle-column">
              <div className="team-member-form__personal-row">
                <label
                  className="team-member-form__label team-member-form__label-half"
                  id="first-name"
                  htmlFor="first-name"
                >
                  First Name
                  <input
                    className="team-member-form__input"
                    name="firstName"
                    id="first-name"
                    required
                    onChange={this.handleChange}
                    value={formData.firstName}
                  />
                </label>
                <label
                  className="team-member-form__label"
                  id="last-name"
                  htmlFor="last-name"
                >
                  Last Name
                  <input
                    className="team-member-form__input"
                    name="lastName"
                    id="last-name"
                    required
                    onChange={this.handleChange}
                    value={formData.lastName}
                  />
                </label>
              </div>
              <label
                className="team-member-form__label"
                id="email"
                htmlFor="email"
              >
                  Email
                <input
                  className="team-member-form__input"
                  name="email"
                  id="email"
                  required
                  onChange={this.handleChange}
                  value={formData.email}
                />
              </label>
              <label
                className="team-member-form__label"
                id="bio"
                htmlFor="bio"
              >
                Bio
                <textarea
                  className="team-member-form__text-field"
                  name="bio"
                  id="bio"
                  required
                  onChange={this.handleChange}
                  value={formData.bio}
                />
              </label>
            </div>
            <div className="team-member-form__personal-right-column">
              <label
                className="team-member-form__label"
                id="address"
                htmlFor="address"
              >
                Address
                <input
                  className="team-member-form__input"
                  name="address"
                  id="address"
                  required
                  onChange={this.handleChange}
                  value={formData.address}
                />
              </label>
              <div className="team-member-form__personal-row">
                <label
                  className="team-member-form__label team-member-form__label-half"
                  id="zip-code"
                  htmlFor="zip-code"
                >
                    ZIP code
                  <input
                    className="team-member-form__input"
                    name="zipCode"
                    id="zip-code"
                    required
                    onChange={this.handleChange}
                    value={formData.zipCode}
                  />
                </label>
                <label
                  className="team-member-form__label"
                  id="city"
                  htmlFor="city"
                >
                    City
                  <input
                    className="team-member-form__input"
                    name="city"
                    id="city"
                    required
                    onChange={this.handleChange}
                    value={formData.city}
                  />
                </label>
              </div>
              <div className="team-member-form__personal-socials">
                <p className="team-member-form__label">
                  Social Profiles
                </p>
                <div className="team-member-form__personal-row">
                  <span className="team-member-form__personal-twitter-logo">
                    <img
                      className="team-member-form__personal-svg"
                      src="/static/icons/twitter-logo.svg"
                      alt="plus"
                    />
                  </span>
                  <input
                    className="team-member-form__input team-member-form__input-social"
                    name="twitter"
                    id="twitter"
                    onChange={this.handleChange}
                    value={formData.twitter}
                  />
                </div>
                <div className="team-member-form__personal-row">
                  <span className="team-member-form__personal-facebook-logo">
                    <img
                      className="team-member-form__personal-svg"
                      src="/static/icons/facebook-logo.svg"
                      alt="plus"
                    />
                  </span>
                  <input
                    className="team-member-form__input team-member-form__input-social "
                    name="facebook"
                    id="facebook"
                    onChange={this.handleChange}
                    value={formData.facebook}
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

export default TeamMemberForm;
