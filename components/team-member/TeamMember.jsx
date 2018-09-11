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
      <div
        className="team-member"
        onClick={this.handleClick}
        onKeyDown={this.handleClick}
        role="button"
        tabIndex="0"
      >
        <div className="team-member__top-row">
          <div className="employee-summary">
            <img
              className="employee-picture"
              src={picture}
              alt={`${firstName} ${lastName}`}
            />
            <div className="name-profession">
              <div className="employee-name">
                {`${firstName} ${lastName}`}
              </div>
              <div className="profession">
                { profession }
              </div>
            </div>
          </div>
          <div className="employee-container">
            <div className="employee-details-desktop">
              <div className="employee-number">
                {employeeNumber}
                <div className="employee-number__text">
                  Employee number
                </div>
              </div>
              <div className="current-employer-desktop">
                {currentEmployer}
                <div className="current-employer-desktop__text">
                  Current employer
                </div>
              </div>
              <div className="start-date-desktop">
                {this.getStartDate()}
                <div className="start-date-desktop__text">
                  Starting date
                </div>
              </div>
            </div>
            <span
              className={`employee__arrow-expand
                employee__arrow-expand${showDetails ? '--opened' : '--closed'}
              `}
            />
          </div>
        </div>
        <div className={`team-member__employee-details-mobile${showDetails ? '--expanded' : '--collapsed'}`}>
          <div className="detail-header">
            <div className="detail-header__text">
              Detailed information about
              {' '}
              {firstName}
            </div>
          </div>
          <div className="current-employer">
            <div>
              {currentEmployer}
            </div>
            <div className="current-employer__text">
              Current employer
            </div>
          </div>
          <div className="start-date">
            {this.getStartDate()}
            <div className="start-date__text">
              Starting date
            </div>
          </div>
        </div>
      </div>
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
