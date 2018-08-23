const TOGGLE_MENU_OPEN = 'TOGGLE_MENU_OPEN';

export const isMenuOpenSelector = (state) => state.header.isMenuOpen;

const initialState = {
  isMenuOpen: false
};

export const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU_OPEN:
      return { ...state, isMenuOpen: !state.isMenuOpen };
    default:
      return { ...state };
  }
};

export const toggleMenuOpen = () => ({
  type: TOGGLE_MENU_OPEN
});
