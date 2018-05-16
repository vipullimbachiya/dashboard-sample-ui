import * as types from '../Constants/types';

const initialState = {
  openedNav: '',
  selectedNav: '',
  selectedNavItem: null,
};

export default function sidebar(state = initialState, action) {
  const modified = Object.assign({}, state);
  switch (action.type) {
    case types.OPEN_NAV:
      modified.openedNav = action.payload;
      return modified;
    case types.CLOSE_NAV:
      modified.openedNav = '';
      return modified;
    case types.SELECT_NAV:
      modified.selectedNav = action.payload;
      return modified;
    case types.SELECT_NAV_ITEM:
      modified.selectedNavItem = action.payload;
      return modified;
    case types.DESELECT_ALL_NAV_ITEMS:
      modified.selectedNavItem = null;
      return modified;
    default:
      return modified;
  }
}
