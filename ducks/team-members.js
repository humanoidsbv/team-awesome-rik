export const ADD_TEAM_MEMBER = 'ADD_TEAM_MEMBER';
export const ADD_TEAM_MEMBER_SUCCESS = 'ADD_TEAM_MEMBER_SUCCESS';
export const DELETE_TEAM_MEMBER = 'DELETE_TEAM_MEMBER';
export const DELETE_TEAM_MEMBER_SUCCESS = 'DELETE_TEAM_MEMBER_SUCCESS';
export const REQUEST_TEAM_MEMBERS = 'REQUEST_TEAM_MEMBERS';
export const REQUEST_TEAM_MEMBERS_SUCCESS = 'REQUEST_TEAM_MEMBERS_SUCCESS';

export const teamMembersSelector = (state) => state.teamMembers.items;

export const initialState = {
  items: [],
  isLoading: false
};

export const teamMembersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TEAM_MEMBER:
      return { ...state, isLoading: true };
    case ADD_TEAM_MEMBER_SUCCESS:
      return { ...state, items: [action.teamMember, ...state.items] };
    case DELETE_TEAM_MEMBER:
      return { ...state, isLoading: true };
    case DELETE_TEAM_MEMBER_SUCCESS:
      return {
        ...state,
        items: state.items.filter((current) => current.id !== action.id)
      };
    case REQUEST_TEAM_MEMBERS:
      return { ...state, isLoading: true };
    case REQUEST_TEAM_MEMBERS_SUCCESS:
      return { ...state, items: action.teamMembers, isLoading: false };
    default:
      return state;
  }
};

export const addTeamMember = (teamMember) => ({ type: ADD_TEAM_MEMBER, teamMember });
export const addTeamMemberSuccess = (teamMember) => (
  { type: ADD_TEAM_MEMBER_SUCCESS, teamMember }
);
export const deleteTeamMember = (id) => ({ type: DELETE_TEAM_MEMBER, id });
export const deleteTeamMemberSuccess = (id) => (
  { type: DELETE_TEAM_MEMBER_SUCCESS, id }
);

export const requestTeamMembers = () => ({ type: REQUEST_TEAM_MEMBERS });
export const requestTeamMembersSucces = (teamMembers) => (
  { type: REQUEST_TEAM_MEMBERS_SUCCESS, teamMembers }
);
