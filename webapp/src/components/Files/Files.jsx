import React, { useState, useEffect } from 'react';
import Cookie from 'universal-cookie';

import LinkToFolder from './LinkToFolder';
import LinkToSong from './LinkToSong';

import getFiles from './tools/files';

import './style/files.scss';

const Files = ({ route, setRoute, queueSongs, setQueueSongs, songIndex, setSongIndex }) => {
    const [folders, setFolders] = useState([]);
    const [files, setFiles] = useState([]);
    const [samePlaylist, setSamePlaylist] = useState(false);

    useEffect(() => {
        const cookie = new Cookie();
        const token = cookie.get('dbx-token');

        getFiles(token, route)
            .then((result) => {
                const firstFile = result.data.findIndex((file) => file['.tag'] === 'file');
                if (firstFile >= 0) {
                    const songs = result.data.splice(firstFile, result.data.length);
                    setFiles(songs);
                } else {
                    setFiles([]);
                }
                
                setFolders(result.data);
            })
            .catch((error) => {
                if (error) {
                    setFiles([]);
                }
            });

    }, [route]);

    useEffect(() => {
        const samePlaylist = isSamePlaylist();
        setSamePlaylist(samePlaylist);
    }, [files, queueSongs, songIndex]);


    const isSamePlaylist = () => {
        if ((files.length > 0) && (files.length === queueSongs.length)) {
            const isMatch = files.some((file, index) => file.name !== queueSongs[index].name);
            return !isMatch;
        } else {
            return false;
        }
    };

    return (
        <div className="files-container">
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
                files.map((song, index) => {
                    return(
                        <LinkToSong
                            key={index}
                            index={index}
                            fileName={song.name}
                            setSongIndex={setSongIndex}
                            songIndex={songIndex}
                            samePlaylist={samePlaylist}
                            setQueueSongs={setQueueSongs}
                            files={files}
                        />
                    );
                })
            }   
        </div>
    );
};

export default Files;