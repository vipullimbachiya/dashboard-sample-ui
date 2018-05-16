import React from 'react';
import { Helmet } from 'react-helmet';

import FileUploaderContainer from '../components/FileUploader/FileUploaderContainer';
import AppTemplateContainer from './Templates/AppTemplateContainer';

const FileUploader = () => (
  <AppTemplateContainer sidebarType="default">
    <Helmet>
      <title> Dashboard - Ace </title>
    </Helmet>

    <FileUploaderContainer />
  </AppTemplateContainer>
);

export default FileUploader;
