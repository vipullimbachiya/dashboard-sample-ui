import React from 'react';
import { toast } from 'react-toastify';
import Toast from './Toast';

let toastId = null;
const options = {
  autoClose: 5000,
  hideProgressBar: true,
  pauseOnHover: true,
  className: 'new alert',
};

export const info = (msg, title, onClick) => {
  if (!toast.isActive(toastId)) {
    toastId = toast.info(
      <Toast
        type="info"
        iconName="info_outline"
        msg={msg}
        title={title || 'Information for you!'}
        onClick={onClick}
      />,
      options,
    );
  }
};

export const warning = (msg, title, onClick) => {
  if (!toast.isActive(toastId)) {
    toastId = toast.warning(
      <Toast
        type="warning"
        iconName="report_problem"
        msg={msg}
        title={title || "It's a warning!"}
        onClick={onClick}
      />,
      options,
    );
  }
};

export const error = (msg, title, onClick) => {
  if (!toast.isActive(toastId)) {
    toastId = toast.error(
      <Toast
        type="error"
        iconName="error_outline"
        msg={msg}
        title={title || 'Oh snap!'}
        onClick={onClick}
      />,
      options,
    );
  }
};

export const success = (msg, title, onClick) => {
  if (!toast.isActive(toastId)) {
    toastId = toast.success(
      <Toast
        type="success"
        iconName="thumb_up"
        msg={msg}
        title={title || 'Well done!'}
        onClick={onClick}
      />,
      options,
    );
  }
};
