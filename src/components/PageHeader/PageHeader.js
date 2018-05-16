import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumb from './Breadcrumb';

const PageHeader = props => (
  <div className="breadcrumbs" id="breadcrumbs">
    <Breadcrumb navBlocks={props.navBlocks} />
    <div className="nav-search" id="nav-search">
      <form className="form-search">
        <span className="input-icon">
          <input
            type="text"
            placeholder="Search ..."
            className="nav-search-input"
            id="nav-search-input"
            autoComplete="off"
          />
          <i className="ace-icon fa fa-search nav-search-icon" />
        </span>
      </form>
    </div>
  </div>
);

PageHeader.propTypes = {
  navBlocks: PropTypes.arrayOf(PropTypes.string),
};

PageHeader.defaultProps = {
  navBlocks: [],
};

export default PageHeader;
