import React from 'react';
import PropTypes from 'prop-types';

import TeamMembers from '../team-members/TeamMembers';
import PageHeader from '../../shared/components/page-header/PageHeader';
import ComponentHeader from '../../shared/components/component-header/ComponentHeader';
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
      <React.Fragment>
        <PageHeader
          text="TeamMembers"
          summation={teamMembers.length}
          summationText="Humanoid"
          summationTextPlural="Humanoids"
          displaySearchField
        />
        <section className="team-members-overview">
          <div className="team-members-overview__component-header">
            <ComponentHeader
              text="All Humanoids"
              addButtons={[
                {
                  buttonText: 'New Humanoid',
                  link: 'add-team-member'
                }

              ]}
              selectBoxes={[
                {
                  name: 'humanoidFilter',
                  onChange: this.handleChangeSortBy,
                  options: ['First Name', 'Last Name'],
                  optionValues: ['firstName', 'lastName'],
                  value: sortBy
                },
                {
                  name: 'filterDirection',
                  onChange: this.handleChangeSortDirection,
                  options: ['Ascending', 'Descending'],
                  optionValues: ['ascending', 'descending'],
                  value: sortDirection
                }
              ]}
            />
          </div>
          <div className="team-members-overview__container">
            <TeamMembers teamMembers={teamMembers} />
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default TeamMembersOverview;
