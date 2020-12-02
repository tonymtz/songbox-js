import axios from 'axios';
import Cookie from 'universal-cookie';

export const getFavorites = async () => {
  const cookie = new Cookie();
  const token = cookie.get('dbx-token');

  try {
    const url = `${window.location.protocol}//${window.location.hostname}/api/favorites`;
    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        'dbx-token': `${token}`,
      },
    });

    return response;
  } catch (error) {
    return false;
  }
};

export const addFavorite = async (file) => {
  const cookie = new Cookie();
  const token = cookie.get('dbx-token');

  try {
    const url = `${window.location.protocol}//${window.location.hostname}/api/favorite/`;
    const response = await axios.post(url, { data: file }, {
      headers: {
        'Content-Type': 'application/json',
        'dbx-token': `${token}`,
      },
    });

    return response;
  } catch (error) {
    return false;
  }
};

export const removeFavorite = async (file) => {
  const cookie = new Cookie();
  const token = cookie.get('dbx-token');

  try {
    const url = `${window.location.protocol}//${window.location.hostname}/api/favorite/`;
    const response = await axios.delete(url, {
      headers: {
        'Content-Type': 'application/json',
        'dbx-token': `${token}`,
      },
      params: {
        file,
      },
    });

    return response;
  } catch (error) {
    return false;
  }
};
