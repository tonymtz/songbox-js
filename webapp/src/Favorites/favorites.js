import axios from 'axios';
import Cookie from 'universal-cookie';

const getDbxToken = () => {
    const cookie = new Cookie();
    return cookie.get('dbx-token');
}

export const getFavorites = async() => {
    const cookie = new Cookie();
    const token = cookie.get('dbx-token');

    try {
        const url = `${window.location.protocol}//${window.location.hostname}:4000/api/favorites`;
        const response = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json',
                'dbx-token': `${token}`
            }
        });
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const addFavorite = async(data) => {
    const cookie = new Cookie();
    const token = cookie.get('dbx-token');

    try {
        const url = `${window.location.protocol}//${window.location.hostname}:4000/api/favorite/`;
        const response = await axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json',
                'dbx-token': `${token}`
            }
        });
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const removeFavorite = async(file) => {
    const cookie = new Cookie();
    const token = cookie.get('dbx-token');

    try {
        const url = `${window.location.protocol}//${window.location.hostname}:4000/api/favorite/`;
        const response = await axios.delete(url, {
            headers: {
                'Content-Type': 'application/json',
                'dbx-token': `${token}`
            },
            params: {
                file
            }
        });
        return response;
    } catch (error) {
        console.log(error);
    }
};