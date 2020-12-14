import { FILES_SET_FILES_LIST, FILES_SET_FOLDER_LIST } from '../constants';
import { apiFetchFiles } from '../../lib/apiFilesService';
import { getFolders, getSongs } from '../../utils/files';

/* SYNC OPERATIONS */

export const setFilesList = (payload) => ({ type: FILES_SET_FILES_LIST, payload });
export const setFoldersList = (payload) => ({ type: FILES_SET_FOLDER_LIST, payload });

/* ASYNC OPERATIONS */

export const fetchFilelistFromPath = (path) => (dispatch, getState) => {
  const token = getState().app.get('token');

  apiFetchFiles(token, path)
    .then(({ data }) => {
      dispatch(setFoldersList(getFolders(data)));
      dispatch(setFilesList(getSongs(data)));
    })
    .catch((err) => {
      console.error(err);
    });
};
