import axios from 'axios';
import Cookie from 'universal-cookie';

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

        return response
    } catch (error) {
        console.log(error);
    }
};