import { createSelector } from 'reselect';

import { clientsIdAndNameSelector } from './clients';

export const ADD_TIME_ENTRY = 'ADD_TIME_ENTRY';
export const ADD_TIME_ENTRY_SUCCESS = 'ADD_TIME_ENTRY_SUCCESS';
export const DELETE_TIME_ENTRY = 'DELETE_TIME_ENTRY';
export const DELETE_TIME_ENTRY_SUCCESS = 'DELETE_TIME_ENTRY_SUCCESS';
export const REQUEST_TIME_ENTRIES = 'REQUEST_TIME_ENTRIES';
export const REQUEST_TIME_ENTRIES_SUCCESS = 'REQUEST_TIME_ENTRIES_SUCCESS';
export const FILTER_TIME_ENTRIES = 'FILTER_TIME_ENTRIES';
export const FILTER_TIME_ENTRIES_SUCCESS = 'FILTER_TIME_ENTRIES_SUCCESS';


const timeEntriesRoot = (state) => state.timeEntries;

const timeEntriesItemsSelector = createSelector(timeEntriesRoot,
  (timeEntries) => timeEntries.items);

export const timeEntryActiveFilterSelector = createSelector(timeEntriesRoot,
  (timeEntries) => timeEntries.activeFilter);

export const timeEntriesSelector = createSelector(
  [timeEntriesItemsSelector, timeEntryActiveFilterSelector, clientsIdAndNameSelector],
  (timeEntries, activeFilter, clientsIdAndName) => {
    const entriesWithClientName = timeEntries.map(
      (timeEntry) => {
        const client = clientsIdAndName.find(
          (currentClient) => timeEntry.clientId === currentClient.id
        );

        return (
          {
            ...timeEntry,
            clientName: client === undefined ? 'Client not found' : client.name
          });
      }
    );

    return (
      !activeFilter
        ? entriesWithClientName
        : entriesWithClientName.filter((item) => item.clientId === activeFilter))
      .sort((a, b) => {
        if (a.from > b.from) {
          return 1;
        }
        if (a.from < b.from) {
          return -1;
        }
        return 0;
      });
  }
);


export const initialState = {
  items: [],
  error: '',
  isLoading: false,
  activeFilter: ''
};

export const timeEntriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TIME_ENTRY:
      return { ...state, isLoading: true };
    case ADD_TIME_ENTRY_SUCCESS:
      return { ...state, items: [action.timeEntry, ...state.items] };
    case DELETE_TIME_ENTRY:
      return { ...state, isLoading: true };
    case DELETE_TIME_ENTRY_SUCCESS:
      return {
        ...state,
        items: state.items.filter((current) => current.id !== action.id)
      };
    case REQUEST_TIME_ENTRIES:
      return { ...state, isLoading: true };
    case REQUEST_TIME_ENTRIES_SUCCESS:
      return { ...state, items: action.timeEntries, isLoading: false };
    case FILTER_TIME_ENTRIES:
      return { ...state, isLoading: true };
    case FILTER_TIME_ENTRIES_SUCCESS:
      return { ...state, activeFilter: action.filter, isLoading: false };
    default:
      return state;
  }
};

export const addTimeEntry = (timeEntry) => ({ type: ADD_TIME_ENTRY, timeEntry });
export const addTimeEntrySuccess = (timeEntry) => (
  { type: ADD_TIME_ENTRY_SUCCESS, timeEntry }
);
export const deleteTimeEntry = (id) => ({ type: DELETE_TIME_ENTRY, id });
export const deleteTimeEntrySuccess = (id) => (
  { type: DELETE_TIME_ENTRY_SUCCESS, id }
);

export const requestTimeEntries = () => ({ type: REQUEST_TIME_ENTRIES });
export const requestTimeEntriesSucces = (timeEntries) => (
  { type: REQUEST_TIME_ENTRIES_SUCCESS, timeEntries }
);
export const filterTimeEntries = (filter) => ({ type: FILTER_TIME_ENTRIES, filter });
export const filterTimeEntriesSuccess = (filter) => ({ type: FILTER_TIME_ENTRIES_SUCCESS, filter });
