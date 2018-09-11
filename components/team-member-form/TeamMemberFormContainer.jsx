import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  addTeamMember, teamMembersSelector
} from '../../ducks/team-members';
import TeamMemberForm from './TeamMemberForm';

const TeamMemberFormContainer = (props) => (
  <TeamMemberForm {...props} />
);


const mapStateToProps = (state) => ({
  teamMembers: teamMembersSelector(state)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addTeamMember,
  teamMembersSelector
}, dispatch);


TeamMemberFormContainer.propTypes = TeamMemberForm.propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(TeamMemberFormContainer);
