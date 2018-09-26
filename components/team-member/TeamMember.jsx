import React from 'react';
import PropTypes from 'prop-types';

import './team-member.scss';
import { convertTStoDateWrittenMonth } from '../../services/date-time/date-time';

class TeamMember extends React.Component {
  state = { showDetails: false }

  getStartDate = () => {
    const { startDate } = this.props;
    return convertTStoDateWrittenMonth(startDate);
  }

  handleClick = () => {
    this.setState(({ showDetails }) => ({
      showDetails: !showDetails
    }));
  }

  render() {
    const {
      firstName, lastName, employeeNumber,
      currentEmployer, profession, picture
    } = this.props;
    const { showDetails } = this.state;
    return (
      <li
        className="team-member"
        onClick={this.handleClick}
        onKeyDown={this.handleClick}
        role="button"
        tabIndex="0"
      >
        <section className="team-member__top-row">
          <div className="team-member__summary">
            <img
              className="team-member__picture"
              src={picture}
              alt={`${firstName} ${lastName}`}
            />
            <hgroup className="team-member__detail">
              <h3 className="team-member__name">
                {`${firstName} ${lastName}`}
              </h3>
              <h3 className="team-member__detail-label">
                { profession }
              </h3>
            </hgroup>
          </div>
          <hgroup className="team-member__details-desktop">
            <h3 className="team-member__detail">
              {employeeNumber}
              <span className="team-member__detail-label">
                Employee number
              </span>
            </h3>
            <h3 className="team-member__detail">
              {currentEmployer}
              <span className="team-member__detail-label">
                Current employer
              </span>
            </h3>
            <h3 className="team-member__detail">
              {this.getStartDate()}
              <span className="team-member__detail-label">
                Starting date
              </span>
            </h3>
            <span
              className={`team-member__arrow-expand
                team-member__arrow-expand${showDetails ? '--opened' : '--closed'}
              `}
            />
          </hgroup>
        </section>
        <section className={`team-member-dropdown
          team-member-dropdown${showDetails ? '--expanded' : '--collapsed'}`}
        >
          <div className="team-member-dropdown__divider">
            <h4 className="team-member-dropdown__divider-text">
              Detailed information about
              {' '}
              {firstName}
            </h4>
          </div>
          <div className="team-member-dropdown__info">
            <hgroup className="team-member-dropdown__detail">
              <h3>
                {currentEmployer}
              </h3>
              <h4 className="team-member__detail-label">
                Current client
              </h4>
            </hgroup>
            <hgroup className="team-member-dropdown__detail">
              {this.getStartDate()}
              <h4 className="team-member__detail-label">
                Starting date
              </h4>
            </hgroup>
          </div>
        </section>
      </li>
    );
  }
}

TeamMember.propTypes = {
  currentEmployer: PropTypes.string.isRequired,
  employeeNumber: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired
};

export default TeamMember;
