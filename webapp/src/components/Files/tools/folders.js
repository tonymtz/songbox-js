const getFolders = (files) => {
  const folders = files.filter((file) => file['.tag'] === 'folder');
  folders.sort((last, next) => {
    if (last.name.toLowerCase() > next.name.toLowerCase()) return 1;
    if (last.name.toLowerCase() < next.name.toLowerCase()) return -1;
    return 0;
  });

  return folders;
};

export default getFolders;
