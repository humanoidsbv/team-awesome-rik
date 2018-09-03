import React from 'react';
import mockTeamMembers from './mockTeamMembers.json';

import TeamMembers from '../team-members/TeamMembers';
import './team-members-overview.scss';

const TeamMembersOverview = () => (
  <div className="container">
    <TeamMembers teamMembers={mockTeamMembers} />
  </div>
);

export default TeamMembersOverview;
