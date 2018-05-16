import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../../Actions/appHeaderActions';
import AppHeader from './AppHeader';

class AppHeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  toggleSidebar() {
    this.props.toggleSidebar(!this.props.toggled);
  }

  render() {
    return <AppHeader toggleSidebar={this.toggleSidebar} />;
  }
}

AppHeaderContainer.propTypes = {
  toggleSidebar: PropTypes.func,
  toggled: PropTypes.bool,
};

AppHeaderContainer.defaultProps = {
  toggleSidebar: () => {},
  toggled: false,
};

const mapStateToProps = state => ({
  toggled: state.appHeader.toggled,
});

const mapDispatchToProps = dispatch => ({
  toggleSidebar: toggle => dispatch(actions.toggleSidebar(toggle)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppHeaderContainer);
