import React from 'react';
import mockTeamMembers from './mockTeamMembers.json';

import TeamMembers from '../team-members/TeamMembers';
import TeamMemberForm from '../team-member-form/TeamMemberForm';
import './team-members-overview.scss';

const TeamMembersOverview = () => (
  <div className="container">
    <TeamMemberForm />
    <TeamMembers teamMembers={mockTeamMembers} />
  </div>
);

export default TeamMembersOverview;
