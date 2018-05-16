import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PageHeader from './PageHeader';

const PageHeaderContainer = props => <PageHeader navBlocks={props.navBlocks} />;

PageHeaderContainer.propTypes = {
  navBlocks: PropTypes.arrayOf(PropTypes.string),
};

PageHeaderContainer.defaultProps = {
  navBlocks: [],
};

const mapStateToProps = state => ({
  navBlocks: state.pageHeader.navBlocks,
});

export default connect(mapStateToProps)(PageHeaderContainer);
