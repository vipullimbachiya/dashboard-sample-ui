import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Blockui from 'react-block-ui';
import { toast } from 'react-toastify';

import FileUploader from './FileUploader';
import * as actions from '../../Actions/sidebarActions';
import * as pageHeaderActions from '../../Actions/pageHeaderActions';

const noop = () => {};

class FileUploaderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
    this.onFileDrop = this.onFileDrop.bind(this);
  }
  componentDidMount() {
    this.props.setNavBlocks(['dashboard']);
    this.props.selectNav('dashboard');
    this.props.selectNavItem('dashboard');
  }

  onFileDrop(files) {
    console.log(files);
    this.setState({
      loading: true,
    });
    setTimeout(() => {
      toast.success('Files uploaded successfully');
      this.setState({ loading: false });
    }, 5000);
  }

  render() {
    return (
      <Blockui tag="div" className="toaster" blocking={this.state.loading}>
        <FileUploader onFileDrop={this.onFileDrop} />
      </Blockui>
    );
  }
}

FileUploaderContainer.propTypes = {
  selectNav: PropTypes.func,
  selectNavItem: PropTypes.func,
  setNavBlocks: PropTypes.func,
};

FileUploaderContainer.defaultProps = {
  selectNav: noop,
  selectNavItem: noop,
  setNavBlocks: noop,
};

const mapDispatchToProps = dispatch => ({
  selectNav: id => dispatch(actions.selectNav(id)),
  selectNavItem: id => dispatch(actions.selectNavItem(id)),
  setNavBlocks: blocks => dispatch(pageHeaderActions.setNavBlocks(blocks)),
});

export default connect(null, mapDispatchToProps)(FileUploaderContainer);
