import * as types from '../Constants/types';

export const openNav = id => ({
  type: types.OPEN_NAV,
  payload: id,
});

export const closeNav = id => ({
  type: types.CLOSE_NAV,
  payload: id,
});

export const selectNav = id => ({
  type: types.SELECT_NAV,
  payload: id,
});

export const selectNavItem = id => ({
  type: types.SELECT_NAV_ITEM,
  payload: id,
});

export const deSelectAllNavItems = () => ({
  type: types.DESELECT_ALL_NAV_ITEMS,
});
