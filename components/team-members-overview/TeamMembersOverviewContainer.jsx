import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  requestTeamMembers, teamMembersSelector
} from '../../ducks/team-members';
import TeamMembersOverview from './TeamMembersOverview';

const TeamMembersOverviewContainer = (props) => (
  <TeamMembersOverview {...props} />
);


const mapStateToProps = (state) => ({
  teamMembers: teamMembersSelector(state)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  requestTeamMembers,
  teamMembersSelector
}, dispatch);


TeamMembersOverviewContainer.propTypes = TeamMembersOverview.propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(TeamMembersOverviewContainer);
