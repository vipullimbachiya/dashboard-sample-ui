import * as types from '../Constants/types';

export const openModal = modalName => ({
  type: types.OPEN_MODAL,
  payload: modalName,
});

export const closeModal = () => ({
  type: types.CLOSE_MODAL,
  payload: null,
});
