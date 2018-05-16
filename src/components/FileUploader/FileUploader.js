import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

const noop = () => {};

const FileUploader = props => (
  <Dropzone
    disablePreview={false}
    className="upload-file-dropzone"
    activeClassName="active"
    onDrop={props.onFileDrop}
  >
    <p className="text-center">
      Try to drop some files to this dropzone or click to select some files to
      upload.
    </p>
  </Dropzone>
);

FileUploader.propTypes = {
  onFileDrop: PropTypes.func,
};

FileUploader.defaultProps = {
  onFileDrop: noop,
};

export default FileUploader;
