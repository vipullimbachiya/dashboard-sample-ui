import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AppTemplate from './AppTemplate';

const AppTemplateContainer = props => (
  <AppTemplate toggled={props.toggled}>{props.children}</AppTemplate>
);

AppTemplateContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  toggled: PropTypes.bool,
};

AppTemplateContainer.defaultProps = {
  children: [<div />],
  toggled: false,
};

const mapStateToProps = state => ({
  toggled: state.appHeader.toggled,
});

export default connect(mapStateToProps)(AppTemplateContainer);
