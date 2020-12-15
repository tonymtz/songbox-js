import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
  
import { fetchFilelistFromPath } from '../../store/actions/filesActions';

import RefreshButtonComponent from './RefreshButton.component';

const RefreshButtonContainer = () => {
  const { path } = useParams();

  const dispatch = useDispatch();
  const getFilesFromCurrentPath = () => dispatch(fetchFilelistFromPath(path || ''));
  
  return <RefreshButtonComponent event={getFilesFromCurrentPath} />;
};

export default RefreshButtonContainer;