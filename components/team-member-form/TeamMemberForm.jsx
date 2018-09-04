import React from 'react';

import './team-member-form.scss';

class TeamMemberForm extends React.Component {
  static defaultState = {
    formData: {
      profession: 'Developer',
      startDate: '2018-08-06T07:00:00.000Z',
      firstName: 'Rik',
      lastName: 'Frieling',
      email: 'rikfrieling@gmail.com',
      bio: 'Houdt van lange strandwandelingen en leuke dingen doen met vrienden',
      adress: 'Hamburgerstraat 14bis',
      zipCode: '3512 NR',
      city: 'Utrecht',
      socialProfiles: 'links',
      picture: '/static/rik.jpg'
    },
    isFormVisible: false
  }

  state={ ...this.defaultState };

  render() {
    const { isFormVisible } = this.state;
    return (
      <React.Fragment>
        <button
          className={`team-member-button
                     team-member-button${isFormVisible ? '--hidden' : '--visible'}`
                     }
          type="button"
          onClick={this.handleClick}
        >
          <img
            className="team-member-button__plus"
            src="/static/icons/plus.svg"
            alt="plus"
          />
          New Humanoid
        </button>
        <div className="team-member-form">
          <div className="team-member-form__header">
            <div className="team-member-form__header__item">
              <div className="team-member-form__header__item__text">
                Personal Details
              </div>
            </div>
          </div>
          <form
            className={`team-member-form__personal
                      team-member-form__personal${isFormVisible ? '--visible' : '--hidden'}`}
          >
            <div className="team-member-form__personal__first-column">
              <img
                className="team-member-form__personal__first-column__picture"
                src="static/rik.jpg"
                alt="profile"
              />
              <div className="team-member-form__personal__first-column__text">
                Edit Avatar
              </div>
            </div>
            <div className="team-member-form__personal__middle-column">
              <div className="team-member-form__personal__middle-column__row">
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
                    pattern="([A-Za-z\\s-]+)"
                  />
                </label>
                <label
                  className="team-member-form__label team-member-form__label-half"
                  id="last-name"
                  htmlFor="last-name"
                >
                  Last Name

                  <input
                    className="team-member-form__input"
                    name="lastName"
                    id="last-name"
                    required
                    pattern="([A-Za-z\\s-]+)"
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
                  pattern="([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})"
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
                />
              </label>
            </div>
            <div className="team-member-form__personal__last-column">
              <label
                className="team-member-form__label"
                id="adress"
                htmlFor="adress"
              >
                Adress
                <input
                  className="team-member-form__input"
                  name="adress"
                  id="adress"
                  required
                  pattern="([1-9][e][\s])*([a-zA-Z]+(([\.][\s])|([\s]))?)+[1-9][0-9]*(([-][1-9][0-9]*)|([\s]?[a-zA-Z]+))"
                />
              </label>
              <div className="team-member-form__personal__last-column__row">
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
                    pattern="([1-9][0-9]{3}[\s]?[A-Za-z]{2})"
                  />
                </label>
                <label
                  className="team-member-form__label team-member-form__label-half"
                  id="city"
                  htmlFor="city"
                >
                    City
                  <input
                    className="team-member-form__input"
                    name="city"
                    id="city"
                    required
                    pattern="([A-Za-z\\s-']+)"
                  />
                </label>
              </div>
              <div className="team-member-form__personal__last-column__row">
                <span className="team-member-form__personal__last-column__twitter-logo">
                  <img
                    className="team-member-form__personal__last-column__twitter-logo__svg"
                    src="/static/icons/twitter-logo.svg"
                    alt="plus"
                  />
                </span>
                <input
                  className="team-member-form__input team-member-form__input-social"
                  name="twitter"
                  id="twitter"
                />
              </div>
              <div className="team-member-form__personal__last-column__row">
                <span className="team-member-form__personal__last-column__facebook-logo">
                  <img
                    className="team-member-form__personal__last-column__facebook-logo__svg"
                    src="/static/icons/facebook-logo.svg"
                    alt="plus"
                  />
                </span>
                <input
                  className="team-member-form__input team-member-form__input-social "
                  name="facebook"
                  id="facebook"
                />
              </div>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default TeamMemberForm;
