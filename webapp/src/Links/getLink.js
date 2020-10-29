import Cookie from 'universal-cookie';
import axios from 'axios';


const getLink = async (path) => {
    const cookie = new Cookie();
    const token = cookie.get('dbx-token');

    try {
        const url = `${window.location.protocol}//${window.location.hostname}/api/file${path}`;
        const resposne = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json',
                'dbx-token': `${token}`
            }
        });

        const songLink = resposne.data.result.preview_url;
        return songLink;
    } catch (error) {
        throw new Error();
    }
};

export default getLink;