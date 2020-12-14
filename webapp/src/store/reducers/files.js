import { Map, List } from 'immutable';

import { FILES_SET_FILES_LIST, FILES_SET_FOLDER_LIST } from '../constants';

const initialState = Map({
  folders: List(),
  files: List(),
});

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case FILES_SET_FILES_LIST:
    return state.set('files', payload);
  case FILES_SET_FOLDER_LIST:
    return state.set('folders', payload);

  case 'ADD_FILE_ROUTE': {
    const files = {
      ...payload,
    };
    return [...state, files];
  }

  case 'UPDATE_FILE_ROUTE': {
    const index = state.findIndex((files) => files.route === payload.route);
    state.splice(index, 1);

    const updatedRoute = {
      ...payload,
    };

    return [...state, updatedRoute];
  }
  default:
    return state;
  }
};
