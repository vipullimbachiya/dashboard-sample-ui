import React from 'react';
import PropTypes from 'prop-types';

const noop = () => {};

const Dashboard = props => (
  <button
    className="btn btn-primary dashboard-content"
    onClick={() => props.showModal(Math.floor(Math.random() * 90000) + 10000)}
  >
    Generate Upload File Link
  </button>
);

Dashboard.propTypes = {
  showModal: PropTypes.func,
};

Dashboard.defaultProps = {
  showModal: noop,
};

export default Dashboard;
