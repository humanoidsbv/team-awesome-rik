import React from 'react';
import Link from 'next/link';

import mockTeamMembers from './mockTeamMembers.json';
import TeamMembers from '../team-members/TeamMembers';
import './team-members-overview.scss';

const TeamMembersOverview = () => (
  <div className="container">
    <Link href="add-team-member">
      <button
        className="team-member-button"
        type="button"
      >
        <img
          className="team-member-button__plus"
          src="/static/icons/plus.svg"
          alt="plus"
        />
        New Humanoid
      </button>
    </Link>
    <TeamMembers teamMembers={mockTeamMembers} />
  </div>
);

export default TeamMembersOverview;
