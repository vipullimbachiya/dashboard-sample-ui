import React from 'react';
import { Helmet } from 'react-helmet';

import PageUnderConstructionContainer from '../components/PageUnderConstruction/PageUnderConstructionContainer';
import AppTemplateContainer from './Templates/AppTemplateContainer';

const PageUnderConstruction = () => (
  <AppTemplateContainer sidebarType="default">
    <Helmet>
      <title> Dashboard - Ace </title>
    </Helmet>

    <PageUnderConstructionContainer />
  </AppTemplateContainer>
);

export default PageUnderConstruction;
