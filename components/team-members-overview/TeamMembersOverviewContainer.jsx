import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  changeSortDirectionSuccess, requestTeamMembers,
  teamMembersSortBySelector, teamMembersSortDirectionSelector,
  sortTeamMembersSuccess, teamMembersSelector
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
  changeSortDirectionSuccess,
  requestTeamMembers,
  sortTeamMembersSuccess,
  teamMembersSelector
}, dispatch);


TeamMembersOverviewContainer.propTypes = TeamMembersOverview.propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(TeamMembersOverviewContainer);
