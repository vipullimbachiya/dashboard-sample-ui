import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../../components/Sidebar/SidebarContainer';
import AppHeader from '../../components/AppHeader/AppHeaderContainer';
import PageHeader from '../../components/PageHeader/PageHeaderContainer';

const DashboardTemplate = props => (
  <Fragment>
    <AppHeader />
    <main className={`${props.toggled ? 'toggled' : ''}`}>
      <Sidebar />
      <div className="page-content-wrapper">
        <PageHeader />
        {props.children}
      </div>
    </main>
  </Fragment>
);

DashboardTemplate.propTypes = {
  children: PropTypes.element,
  toggled: PropTypes.bool,
};

DashboardTemplate.defaultProps = {
  children: <div />,
  toggled: false,
};

export default DashboardTemplate;
