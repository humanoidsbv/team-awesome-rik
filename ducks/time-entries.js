export const ADD_TIME_ENTRY = 'ADD_TIME_ENTRY';
export const ADD_TIME_ENTRY_SUCCESS = 'ADD_TIME_ENTRY_SUCCESS';
export const DELETE_TIME_ENTRY = 'DELETE_TIME_ENTRY';
export const DELETE_TIME_ENTRY_SUCCESS = 'DELETE_TIME_ENTRY_SUCCESS';
export const REQUEST_TIME_ENTRIES = 'REQUEST_TIME_ENTRIES';
export const REQUEST_TIME_ENTRIES_SUCCESS = 'REQUEST_TIME_ENTRIES_SUCCESS';

export const timeEntriesSelector = (state) => state.timeEntries.items;

export const initialState = {
  items: [],
  error: '',
  isLoading: false
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
    default:
      return state;
  }
};

export const addTimeEntry = (timeEntry) => ({ type: ADD_TIME_ENTRY, timeEntry });
export const deleteTimeEntry = (id) => ({ type: DELETE_TIME_ENTRY, id });
export const requestTimeEntries = () => ({ type: REQUEST_TIME_ENTRIES });
