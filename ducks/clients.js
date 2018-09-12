import { createSelector } from 'reselect';


export const ADD_CLIENT = 'ADD_CLIENT';
export const ADD_CLIENT_SUCCESS = 'ADD_ClIENT_SUCCESS';
export const DELETE_CLIENT = 'DELETE_CLIENT';
export const DELETE_CLIENT_SUCCESS = 'DELETE_CLIENT_SUCCESS';
export const REQUEST_CLIENTS = 'REQUEST_CLIENTS';
export const REQUEST_CLIENTS_SUCCESS = 'REQUEST_CLIENTS_SUCCESS';
export const SORT_CLIENTS = 'SORT_CLIENTS';
export const CHANGE_SORT_DIRECTION = 'CHANGE_SORT_DIRECTION';


const clientsRoot = (state) => state.clients;

const clientsItemsSelector = createSelector(clientsRoot,
  (clients) => clients.items);

export const clientsSortBySelector = createSelector(clientsRoot,
  (clients) => clients.sortBy);

export const clientsSortDirectionSelector = createSelector(clientsRoot,
  (clients) => clients.sortDirection);

export const clientsSelector = createSelector(
  [clientsItemsSelector, clientsSortBySelector, clientsSortDirectionSelector],
  (clients, sortBy, sortDirection) => (
    [...clients].sort((a, b) => {
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
  sortBy: 'name',
  sortDirection: 'ascending'
};

export const clientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CLIENT:
      return { ...state, isLoading: true };
    case ADD_CLIENT_SUCCESS:
      return { ...state, items: [action.client, ...state.items] };
    case CHANGE_SORT_DIRECTION:
      return { ...state, sortDirection: action.sortDirection };
    case DELETE_CLIENT:
      return { ...state, isLoading: true };
    case DELETE_CLIENT_SUCCESS:
      return {
        ...state,
        items: state.items.filter((current) => current.id !== action.id)
      };
    case REQUEST_CLIENTS:
      return { ...state, isLoading: true };
    case REQUEST_CLIENTS_SUCCESS:
      return { ...state, items: action.clients, isLoading: false };
    case SORT_CLIENTS:
      return { ...state, sortBy: action.sortBy };
    default:
      return state;
  }
};

export const addClient = (client) => ({ type: ADD_CLIENT, client });
export const addClientSuccess = (client) => (
  { type: ADD_CLIENT_SUCCESS, client }
);
export const deleteClient = (id) => ({ type: DELETE_CLIENT, id });
export const deleteClientSuccess = (id) => (
  { type: DELETE_CLIENT_SUCCESS, id }
);

export const requestClients = () => ({ type: REQUEST_CLIENTS });
export const requestClientsSucces = (clients) => (
  { type: REQUEST_CLIENTS_SUCCESS, clients }
);

export const sortClients = (sortBy) => ({ type: SORT_CLIENTS, sortBy });
export const changeSortDirection = (sortDirection) => (
  { type: CHANGE_SORT_DIRECTION, sortDirection }
);
