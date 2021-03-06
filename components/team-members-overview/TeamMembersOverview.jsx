import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import TeamMembers from '../team-members/TeamMembers';
import SelectBox from '../../shared/components/select-box/SelectBox';
import './team-members-overview.scss';

class TeamMembersOverview extends React.Component {
  static propTypes = {
    changeSortDirection: PropTypes.func.isRequired,
    requestTeamMembers: PropTypes.func.isRequired,
    sortBy: PropTypes.string.isRequired,
    sortDirection: PropTypes.string.isRequired,
    sortTeamMembers: PropTypes.func.isRequired,
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

  handleChangeSortBy = ({ target }) => {
    this.props.sortTeamMembers(target.value);
  }

  handleChangeSortDirection = ({ target }) => {
    this.props.changeSortDirection(target.value);
  }

  render() {
    const { teamMembers, sortBy, sortDirection } = this.props;
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
              <SelectBox
                options={['First Name', 'Last Name']}
                optionValues={['firstName', 'lastName']}
                onChange={this.handleChangeSortBy}
                value={sortBy}
              />
              <SelectBox
                options={['Ascending', 'Descending']}
                optionValues={['ascending', 'descending']}
                onChange={this.handleChangeSortDirection}
                value={sortDirection}
              />
            </span>
          </div>
          <TeamMembers teamMembers={teamMembers} />
        </div>
      </div>
    );
  }
}
export default TeamMembersOverview;
