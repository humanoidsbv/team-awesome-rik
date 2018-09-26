import React from 'react';
import PropTypes from 'prop-types';

import TeamMember from '../team-member/TeamMember';
import './team-members.scss';


const TeamMembers = ({ teamMembers }) => (
  <ul className="team-members">
    {teamMembers.map((teamMember) => (
      <TeamMember
        key={teamMember.id}
        {...teamMember}
      />
    ))}
  </ul>
);

TeamMembers.defaultProps = {
  teamMembers: []
};

TeamMembers.propTypes = {
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
  }))
};

export default TeamMembers;
