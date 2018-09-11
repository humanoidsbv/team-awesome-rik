import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import TeamMembers from '../team-members/TeamMembers';
import './team-members-overview.scss';

class TeamMembersOverview extends React.Component {
  static propTypes = {
    requestTeamMembers: PropTypes.func.isRequired,
    teamMembers: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      employeeNumber: PropTypes.string.isRequired,
      currentEmployer: PropTypes.string.isRequired,
      profession: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      bio: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      zipCode: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      twitter: PropTypes.string.isRequired,
      facebook: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired
    })).isRequired
  }

  componentDidMount() {
    this.props.requestTeamMembers();
  }

  render() {
    const { teamMembers } = this.props;
    return (
      <div className="container">
        <div className="team-members-overview">
          <div className="team-member-overview__header">
            <span className="team-member-overview__text">
              All Humanoids
            </span>
            <span className="team-member-overview__header-buttons">
              <Link href="add-team-member">
                <button
                  className="team-member-overview__button-new"
                  type="button"
                >
                    New Humanoid
                </button>
              </Link>
              <button
                className="team-member-overview__button-sort"
                type="button"
              >
                  Sort by:
              </button>
            </span>
          </div>
          <TeamMembers teamMembers={teamMembers} />
        </div>
      </div>
    );
  }
}
export default TeamMembersOverview;
