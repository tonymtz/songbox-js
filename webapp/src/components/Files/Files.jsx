import React, { useState, useEffect } from 'react';
import Cookie from 'universal-cookie';

import LinkToFolder from './LinkToFolder';
import LinkToSong from './LinkToSong';

import getFiles from './tools/files';

const Files = ({ route, setRoute, setCurrentSong, queueSongs, setQueueSongs, setSongIndex }) => {
    const [folders, setFolders] = useState([]);

    useEffect(() => {
        const cookie = new Cookie();
        const token = cookie.get('dbx-token');

        getFiles(token, route)
            .then((result) => {
                const firstFile = result.data.findIndex((file) => file['.tag'] === 'file');
                if (firstFile >= 0) {
                    const songs = result.data.splice(firstFile, result.data.length);
                    setQueueSongs(songs);
                } else {
                    setQueueSongs([]);
                }
                
                setFolders(result.data);
            })
            .catch((error) => {
                throw new Error(error);
            });
    }, [route]);

    return (
        <div>
            {
                folders.map((file, index) => {
                    return(
                        <LinkToFolder
                            key={index}
                            fileName={file.name}
                            route={route}
                            setRoute={setRoute}
                        />
                    );
                })
            }

            {
                queueSongs.map((song, index) => {
                    return(
                        <LinkToSong
                            key={index}
                            index={index}
                            fileName={song.name}
                            path={song.path_lower}
                            setCurrentSong={setCurrentSong}
                            setSongIndex={setSongIndex}
                            queueSongs={queueSongs}
                            setQueueSongs={setQueueSongs}
                        />
                    );
                })
            }   
        </div>
    );
};

export default Files;