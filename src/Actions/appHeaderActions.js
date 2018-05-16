import * as types from '../Constants/types';

export const toggleSidebar = toggle => ({
  type: types.TOGGLE_SIDEBAR,
  payload: toggle,
});

export const fakeAction = () => {};
