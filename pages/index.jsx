import React from 'react';
import Header from '../components/header';
import TimeEntryOverview from '../components/time-entry-overview';
import TeamMembersOverview from '../components/team-members-overview/TeamMembersOverview';

export default () => (
  <React.Fragment>
    <Header />
    <TeamMembersOverview />
    <TimeEntryOverview />
  </React.Fragment>
);
