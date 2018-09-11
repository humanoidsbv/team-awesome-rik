import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  changeSortDirection, requestTeamMembers,
  teamMembersSortBySelector, teamMembersSortDirectionSelector,
  sortTeamMembers, teamMembersSelector
} from '../../ducks/team-members';
import TeamMembersOverview from './TeamMembersOverview';

const TeamMembersOverviewContainer = (props) => (
  <TeamMembersOverview {...props} />
);


const mapStateToProps = (state) => ({
  sortBy: teamMembersSortBySelector(state),
  sortDirection: teamMembersSortDirectionSelector(state),
  teamMembers: teamMembersSelector(state)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeSortDirection,
  requestTeamMembers,
  sortTeamMembers,
  teamMembersSelector
}, dispatch);


TeamMembersOverviewContainer.propTypes = TeamMembersOverview.propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(TeamMembersOverviewContainer);
