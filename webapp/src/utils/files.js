import { fromJS } from 'immutable';

export const getSongs = (files) => {
  const songs = files.filter((file) => file['.tag'] === 'file');
  songs.sort((last, next) => {
    if (last.name.toLowerCase() > next.name.toLowerCase()) return 1;
    if (last.name.toLowerCase() < next.name.toLowerCase()) return -1;
    return 0;
  });

  return fromJS(songs);
};

export const getFolders = (files) => {
  const folders = files.filter((file) => file['.tag'] === 'folder');
  folders.sort((last, next) => {
    if (last.name.toLowerCase() > next.name.toLowerCase()) return 1;
    if (last.name.toLowerCase() < next.name.toLowerCase()) return -1;
    return 0;
  });

  return fromJS(folders);
};

export default { getSongs, getFolders };
