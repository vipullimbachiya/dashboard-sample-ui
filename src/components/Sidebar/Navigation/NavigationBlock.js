import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const NavigationBlock = props => (
  <Fragment>
    <li>{props.children}</li>
  </Fragment>
);

NavigationBlock.propTypes = {
  children: PropTypes.element,
};

NavigationBlock.defaultProps = {
  children: <div />,
};

export default NavigationBlock;
