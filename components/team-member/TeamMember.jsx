import React from 'react';
import PropTypes from 'prop-types';

import './team-member.scss';
import { convertTStoDateWrittenMonth } from '../../services/date-time/date-time';

class TeamMember extends React.Component {
  state = { showDetails: false }

  handleClick = () => {
    this.setState((prevState) => ({
      ...prevState,
      showDetails: !prevState.showDetails
    }));
  }

  startDate = () => {
    const { startDate } = this.props;
    return convertTStoDateWrittenMonth(startDate);
  }

  render() {
    const {
      firstName, lastName, employeeNumber,
      currentEmployer, profession, picture
    } = this.props;
    const { showDetails } = this.state;
    return (
      <React.Fragment>
        <div className={showDetails ? 'team-member team-member--expanded' : 'team-member'}>
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
                {this.startDate()}
                <div className="start-date-desktop__text">
                  Starting date
                </div>
              </div>
            </div>
            <button
              className={showDetails ? ' employee__button-expand employee__button-expand--clicked'
                : 'employee__button-expand'}
              onClick={this.handleClick}
              type="button"
            />
          </div>
        </div>
        <div className={showDetails ? 'employee-details-mobile--expanded' : 'employee-details-mobile--collapsed'}>
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
            {this.startDate()}
            <div className="start-date__text">
              Starting date
            </div>
          </div>
        </div>
      </React.Fragment>
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
