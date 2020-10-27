import React, { useState, useEffect } from 'react';
import Cookie from 'universal-cookie';

import File from './File';

import getFiles from './tools/files';

const Files = ({ route, setRoute, setSongs, setSongsIndex }) => {
    const [files, setFiles] = useState([]);

    let songIndex = -1;

    const filterSongs = (files) => {
        if (files.length <= 0) return files;
		
        const songs = files.filter((file) => file['.tag'] === 'file');
        return songs;
    };

    useEffect(() => {
        const cookie = new Cookie();
        const token = cookie.get('dbx-token');

        getFiles(token, route)
            .then((result) => {
                setFiles(result.data);
            })
            .catch(() => {
                setFiles([]);
            });
    }, [route]);

    const setSongsInQueue = () => {
        const songs = filterSongs(files);
        setSongs(songs);	
    };

    return (
        <div>
            {
                files.map((file) => {				
                    if (file['.tag'] === 'file') songIndex++;

                    return (					
                        <File
                            key={file.id}
                            file={file}
                            route={route}
                            setRoute={setRoute}
                            setSongsInQueue={setSongsInQueue}
                            songIndex={songIndex}
                            setSongsIndex={setSongsIndex}
                        />
                    );
                })
            }
        </div>
    );
};

export default Files;