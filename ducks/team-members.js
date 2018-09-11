import { createSelector } from 'reselect';


export const ADD_TEAM_MEMBER = 'ADD_TEAM_MEMBER';
export const ADD_TEAM_MEMBER_SUCCESS = 'ADD_TEAM_MEMBER_SUCCESS';
export const DELETE_TEAM_MEMBER = 'DELETE_TEAM_MEMBER';
export const DELETE_TEAM_MEMBER_SUCCESS = 'DELETE_TEAM_MEMBER_SUCCESS';
export const REQUEST_TEAM_MEMBERS = 'REQUEST_TEAM_MEMBERS';
export const REQUEST_TEAM_MEMBERS_SUCCESS = 'REQUEST_TEAM_MEMBERS_SUCCESS';
export const SORT_TEAM_MEMBERS = 'SORT_TEAM_MEMBERS';
export const CHANGE_SORT_DIRECTION = 'CHANGE_SORT_DIRECTION';


const teamMembersRoot = (state) => state.teamMembers;

const teamMembersItemsSelector = createSelector(teamMembersRoot,
  (teamMembers) => teamMembers.items);

export const teamMembersSortBySelector = createSelector(teamMembersRoot,
  (teamMembers) => teamMembers.sortBy);

export const teamMembersSortDirectionSelector = createSelector(teamMembersRoot,
  (teamMembers) => teamMembers.sortDirection);

export const teamMembersSelector = createSelector(
  [teamMembersItemsSelector, teamMembersSortBySelector, teamMembersSortDirectionSelector],
  (teamMembers, sortBy, sortDirection) => (
    [...teamMembers].sort((a, b) => {
      const upperA = a[sortBy].toUpperCase();
      const upperB = b[sortBy].toUpperCase();
      if (upperA > upperB) {
        return sortDirection === 'ascending' ? 1 : -1;
      }
      if (upperA < upperB) {
        return sortDirection === 'ascending' ? -1 : 1;
      }
      return 0;
    })
  )
);

export const initialState = {
  items: [],
  isLoading: false,
  sortBy: 'firstName',
  sortDirection: 'ascending'
};

export const teamMembersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TEAM_MEMBER:
      return { ...state, isLoading: true };
    case ADD_TEAM_MEMBER_SUCCESS:
      return { ...state, items: [action.teamMember, ...state.items] };
    case CHANGE_SORT_DIRECTION:
      return { ...state, sortDirection: action.sortDirection };
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
    case SORT_TEAM_MEMBERS:
      return { ...state, sortBy: action.sortBy };
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

export const sortTeamMembers = (sortBy) => ({ type: SORT_TEAM_MEMBERS, sortBy });
export const changeSortDirection = (sortDirection) => (
  { type: CHANGE_SORT_DIRECTION, sortDirection }
);
