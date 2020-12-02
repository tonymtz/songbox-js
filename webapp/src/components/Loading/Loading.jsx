import React from 'react';
import propTypes from 'prop-types';
import { Spinner } from 'react-bootstrap';

import './styles/loading.scss';

const Loading = ({ isLoading }) => (
  <div className={`loading-container ${isLoading ? '' : 'hide'}`}>
    <Spinner animation="border" role="status" variant="warning">
      <span className="sr-only">Loading...</span>
    </Spinner>
  </div>
);

Loading.propTypes = {
  isLoading: propTypes.bool,
};

Loading.defaultProps = {
  isLoading: false,
};

export default Loading;
