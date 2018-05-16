import React from 'react';
import { Helmet } from 'react-helmet';

import DashboardContainer from '../components/Dashboard/DashboardContainer';
import AppTemplateContainer from './Templates/AppTemplateContainer';

const Dashboard = () => (
  <AppTemplateContainer sidebarType="default">
    <Helmet>
      <title> Dashboard - Ace </title>
    </Helmet>

    <DashboardContainer />
  </AppTemplateContainer>
);

export default Dashboard;
