import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PageUnderConstruction from './PageUnderConstruction';
import * as pageHeaderActions from '../../Actions/pageHeaderActions';

const noop = () => {};

class PageUnderConstructionContainer extends Component {
  componentDidMount() {
    this.props.setNavBlocks(['Page Under Construction']);
  }

  render() {
    return <PageUnderConstruction />;
  }
}

PageUnderConstructionContainer.propTypes = {
  setNavBlocks: PropTypes.func,
};

PageUnderConstructionContainer.defaultProps = {
  setNavBlocks: noop,
};

const mapDispatchToProps = dispatch => ({
  setNavBlocks: blocks => dispatch(pageHeaderActions.setNavBlocks(blocks)),
});

export default connect(null, mapDispatchToProps)(PageUnderConstructionContainer);
