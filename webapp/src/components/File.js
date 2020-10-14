import React from 'react';
import axios from 'axios';
import Cookie from 'universal-cookie';

const File = ({ file, route, setRoute }) => {

    const changeRoute = () => {
        if (file['.tag'] === 'folder') {
            const path = `${route}${file.name}/`;
            setRoute(path);
        }
    }

    const getLink = async () => {
        const cookie = new Cookie();
        const token = cookie.get('dbx-token');

        try {
            const resposne = await axios.get(`http://localhost:4000/api/file${route}${file.name}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'dbx-token': `${token}`
                }
            });

            console.log(resposne.data.result.preview_url);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div
            onClick={
                file['.tag'] === 'folder' ? changeRoute : getLink
            }
        >
            <h6>{file['.tag'] ? file['.tag'] : '???'}</h6>
            <p>{file.name ? file.name : 'Unnamed file'}</p>
        </div>
    );
}

export default File;