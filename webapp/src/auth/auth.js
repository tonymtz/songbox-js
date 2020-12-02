import axios from 'axios';

const auth = async (token) => {
  try {
    const url = `${window.location.protocol}//${window.location.hostname}/api/me`;
    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        'dbx-token': `${token}`,
      },
    });

    return response;
  } catch (error) {
    throw new Error();
  }
};

export default auth;
