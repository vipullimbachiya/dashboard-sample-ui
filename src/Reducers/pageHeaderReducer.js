import * as types from '../Constants/types';

const initialState = {
  navBlocks: [],
};

export default function pageHeader(state = initialState, action) {
  const modified = Object.assign({}, state);

  switch (action.type) {
    case types.SET_NAV_BLOCKS:
      modified.navBlocks = action.payload;
      return modified;
    default:
      return modified;
  }
}
