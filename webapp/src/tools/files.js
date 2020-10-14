import axios from 'axios';

const getFiles = async (token, route) => {
    try {
        const response = await axios.get(`http://localhost:4000/api/files${route}`, {
            headers: {
                'Content-Type': 'application/json',
                'dbx-token': `${token}`
            }
        });

        return response;
    } catch (error) {
        throw new Error();
    }
}

export default getFiles;