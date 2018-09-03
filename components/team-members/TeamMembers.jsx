import React from 'react';

import TeamMember from '../team-member/TeamMember';
import './team-members.scss';


const TeamMembers = ({ teamMembers }) => (
  teamMembers.map((teamMember) => (
    <TeamMember
      key={teamMember.id}
      {...teamMember}
    />
  ))
);

export default TeamMembers;
