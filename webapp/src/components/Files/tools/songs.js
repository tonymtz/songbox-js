const getSongs = (files) => {
  const songs = files.filter((file) => file['.tag'] === 'file');
  songs.sort((last, next) => {
    if (last.name.toLowerCase() > next.name.toLowerCase()) return 1;
    if (last.name.toLowerCase() < next.name.toLowerCase()) return -1;
    return 0;
  });

  return songs;
};

export default getSongs;
