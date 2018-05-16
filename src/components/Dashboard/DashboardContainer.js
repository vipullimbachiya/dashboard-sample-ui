import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';

import Dashboard from './Dashboard';
import ModalContainer from '../Modal/ModalContainer';
import * as actions from '../../Actions/sidebarActions';
import * as pageHeaderActions from '../../Actions/pageHeaderActions';
import * as uiActions from '../../Actions/uiActions';

const noop = () => {};

class DashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.showModal = this.showModal.bind(this);
  }

  componentDidMount() {
    this.props.setNavBlocks(['dashboard']);
    this.props.selectNav('dashboard');
    this.props.selectNavItem('dashboard');
  }

  showModal(randomNum) {
    this.props.openModal('upload-file-modal');
    this.setState({
      value: `${window.location.protocol}//${
        window.location.host
      }/upload/${randomNum}`,
    });
  }

  render() {
    return (
      <Fragment>
        <Dashboard showModal={this.showModal} />
        <ModalContainer
          closeButton
          name="upload-file-modal"
          size="md"
          title="Share link to upload file:"
          footer={
            <button
              className="btn btn-danger"
              onClick={() => this.props.closeModal()}
            >
              Close
            </button>
          }
        >
          <div className="share-link">
            <input
              className="full-width"
              type="text"
              value={this.state.value}
            />
            <CopyToClipboard
              text={this.state.value}
              onCopy={() => toast.success('Link copied to clipboard')}
            >
              <button className="btn btn-primary">Copy to Clipboard</button>
            </CopyToClipboard>
          </div>
          (Copy and share this link to upload files)
        </ModalContainer>
      </Fragment>
    );
  }
}

DashboardContainer.propTypes = {
  selectNav: PropTypes.func,
  selectNavItem: PropTypes.func,
  setNavBlocks: PropTypes.func,
  openModal: PropTypes.func,
  closeModal: PropTypes.func,
};

DashboardContainer.defaultProps = {
  selectNav: noop,
  selectNavItem: noop,
  setNavBlocks: noop,
  openModal: noop,
  closeModal: noop,
};

const mapDispatchToProps = dispatch => ({
  selectNav: id => dispatch(actions.selectNav(id)),
  selectNavItem: id => dispatch(actions.selectNavItem(id)),
  setNavBlocks: blocks => dispatch(pageHeaderActions.setNavBlocks(blocks)),
  openModal: name => dispatch(uiActions.openModal(name)),
  closeModal: () => dispatch(uiActions.closeModal()),
});

export default connect(null, mapDispatchToProps)(DashboardContainer);
