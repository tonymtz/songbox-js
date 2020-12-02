import axios from 'axios';

const getFiles = async (token, route) => {
  try {
    const url = `${window.location.protocol}//${window.location.hostname}/api/files${route}`;
    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        'dbx-token': `${token}`,
      },
    });

    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export default getFiles;
