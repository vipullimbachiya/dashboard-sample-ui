import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// import Modal from 'react-modal';
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../../Actions/uiActions';

const ModalContainer = (props) => {
  if (props.name !== props.globalOpenModal) {
    return null;
  }
  return (
    <Modal
      show
      bsSize={props.size}
      dialogClassName={props.name}
      onHide={props.closeModal}
    >
      <Modal.Header closeButton={props.closeButton}>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>{props.children}</Modal.Body>

      {props.footer ? <Modal.Footer>{props.footer}</Modal.Footer> : <div />}
    </Modal>
  );
};

ModalContainer.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['lg', 'large', 'md', 'sm', 'small']),
  closeModal: PropTypes.func,
  globalOpenModal: PropTypes.string,
  children: PropTypes.element,
  closeButton: PropTypes.bool,
  title: PropTypes.string,
  footer: PropTypes.element,
};

ModalContainer.defaultProps = {
  size: 'md',
  closeModal: () => {},
  globalOpenModal: '',
  children: <div />,
  closeButton: false,
  title: '',
  footer: <Fragment />,
};

const mapStateToProps = state => ({
  globalOpenModal: state.ui.openModal,
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(actions.closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
