import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Breadcrumb = props => (
  <ul className="breadcrumb">
    <li>
      <i className="ace-icon fa fa-home home-icon" />
      <Link to="/dashboard">Home</Link>
    </li>
    {props.navBlocks.map(navBlock => (
      <li>
        <span>{navBlock}</span>
      </li>
    ))}
  </ul>
);

Breadcrumb.propTypes = {
  navBlocks: PropTypes.arrayOf(PropTypes.string),
};

Breadcrumb.defaultProps = {
  navBlocks: [],
};

export default Breadcrumb;
