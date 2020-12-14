import propTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchFilelistFromPath } from '../../store/actions/filesActions';
import FilesComponent from './Files.component';

const FilesContainer = ({ path }) => {
  const files = useSelector((state) => state.files.get('files'));
  const folders = useSelector((state) => state.files.get('folders'));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFilelistFromPath(path));
  }, [path, dispatch]);

  return <FilesComponent files={files} folders={folders} />;
};

FilesContainer.propTypes = {
  path: propTypes.string.isRequired,
};

export default FilesContainer;
