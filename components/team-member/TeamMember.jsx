import React from 'react';
import PropTypes from 'prop-types';

import './team-member.scss';


class TeamMember extends React.Component {
  state = { showDetails: false }

  handleClick = () => {
    this.setState((prevState) => ({
      ...prevState,
      showDetails: !prevState.showDetails
    }));
  }

  render() {
    const {
      firstName, lastName, employeeNumber,
      currentEmployer, startDate, profession,
      picture
    } = this.props;
    const { showDetails } = this.state;
    return (
      <div>
        <div className={showDetails ? 'team-member--expanded' : 'team-member'}>
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
          <div className="employee-details">
            {employeeNumber}
            {currentEmployer}
            {startDate}
            { profession}
          </div>
          <button
            className="employee__button-expand"
            onClick={this.handleClick}
            type="button"
          />
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
            {currentEmployer}
          </div>
          <div className="start-date">
            {startDate}
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
