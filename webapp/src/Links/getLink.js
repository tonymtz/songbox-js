import Cookie from 'universal-cookie';
import axios from 'axios';

const getLink = async (path) => {
  const cookie = new Cookie();
  const token = cookie.get('dbx-token');

  try {
    const url = `${window.location.protocol}//${window.location.hostname}/api/file${path}`;
    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'dbx-token': `${token}`,
      },
    });

    const songLink = response.data.url;
    return songLink;
  } catch (error) {
    throw new Error(error);
  }
};

export default getLink;
