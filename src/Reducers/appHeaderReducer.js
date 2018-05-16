import * as types from '../Constants/types';

const initialState = {
  toggled: false,
};

export default function header(state = initialState, action) {
  const modified = Object.assign({}, state);
  switch (action.type) {
    case types.TOGGLE_SIDEBAR:
      modified.toggled = action.payload;
      return modified;
    default:
      return modified;
  }
}
