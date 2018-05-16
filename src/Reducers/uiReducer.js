import * as types from '../Constants/types';

const initialState = {
  openModal: null,
};

export default function ui(state = initialState, action) {
  const modified = Object.assign({}, state);

  switch (action.type) {
    case types.OPEN_MODAL:
      modified.openModal = action.payload;
      return modified;

    case types.CLOSE_MODAL:
      modified.openModal = null;
      return modified;

    default:
      return modified;
  }
}
