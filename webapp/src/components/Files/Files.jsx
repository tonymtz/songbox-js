import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Cookie from 'universal-cookie';
import { v4 as uuidv4 } from 'uuid';

import LinkToFolder from './LinkToFolder';
import LinkToSong from './LinkToSong';

import getFiles from './tools/files';

import './style/files.scss';

const Files = () => {
  const [folders, setFolders] = useState([]);
  const [files, setFiles] = useState([]);
  const [samePlaylist, setSamePlaylist] = useState(false);

  const route = useSelector((state) => state.route);
  const songsQueue = useSelector((state) => state.songsQueue);
  const darkThemeActive = useSelector((state) => state.player.darkTheme);

  useEffect(() => {
    const cookie = new Cookie();
    const token = cookie.get('dbx-token');

    getFiles(token, route)
      .then((result) => {
        const firstFile = result.data.findIndex((file) => file['.tag'] === 'file');
        if (firstFile >= 0) {
          const songs = result.data
            .splice(firstFile, result.data.length)
            .sort((last, next) => {
              if (last.name.toLowerCase() > next.name.toLowerCase()) return 1;
              if (last.name.toLowerCase() < next.name.toLowerCase()) return -1;
              return 0;
            });

          setFiles(songs);
        } else {
          setFiles([]);
        }

        const orderedFolders = result.data
          .sort((last, next) => {
            if (last.name.toLowerCase() > next.name.toLowerCase()) return 1;
            if (last.name.toLowerCase() < next.name.toLowerCase()) return -1;
            return 0;
          });

        setFolders(orderedFolders);
      })
      .catch((error) => {
        if (error) {
          setFiles([]);
          setFolders([]);
        }
      });
  }, [route]);

  useEffect(() => {
    const isSamePlaylist = () => {
      if ((files.length > 0) && (files.length === songsQueue.length)) {
        const isMatch = files.some((file, index) => file.name !== songsQueue[index].name);
        return !isMatch;
      }
      return false;
    };

    setSamePlaylist(isSamePlaylist());
  }, [files, songsQueue]);

  return (
    <div className={`files-container ${darkThemeActive ? 'dark-theme-background' : ''}`}>
      {
                folders.map((file) => (
                  <LinkToFolder
                    key={uuidv4()}
                    fileName={file.name}
                    route={route}
                  />
                ))
            }

      {
                files.map((song, index) => (
                  <LinkToSong
                    key={uuidv4()}
                    index={index}
                    fileName={song.name}
                    samePlaylist={samePlaylist}
                    files={files}
                    path={song.path_lower}
                    inFavorites={false}
                  />
                ))
            }
    </div>
  );
};

export default Files;
