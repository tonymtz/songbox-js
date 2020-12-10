import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Cookie from 'universal-cookie';

import LinkToFolder from './LinkToFolder';
import LinkToSong from './LinkToSong';

import getFiles from './tools/files';
import { addFiles, updateFiles } from '../../redux/actions';
import getSongs from './tools/songs';
import getFolders from './tools/folders';

import './style/files.scss';

const Files = ({ triggerUpdate, setTriggerUpdate }) => {
  const [folders, setFolders] = useState([]);
  const [files, setFiles] = useState([]);
  const [samePlaylist, setSamePlaylist] = useState(false);

  const route = useSelector((state) => state.route);
  const songsQueue = useSelector((state) => state.songsQueue);
  const darkThemeActive = useSelector((state) => state.player.darkTheme);
  const routeFiles = useSelector((state) => state.filesRoutes);

  const dispatch = useDispatch();

  useEffect(() => {
    const cookie = new Cookie();
    const token = cookie.get('dbx-token');

    const saveFiles = (filesToSave) => dispatch(addFiles(filesToSave));
    const updateFilesState = (filesToUpdate) => dispatch(updateFiles(filesToUpdate));

    const isRouteInCache = routeFiles.findIndex((routes) => routes.route === route);
    if (isRouteInCache >= 0 && !triggerUpdate) {
      const chacedFiles = routeFiles[isRouteInCache].files;
      const cachedSongs = getSongs(chacedFiles);
      const cachedFolders = getFolders(chacedFiles);

      setFiles(cachedSongs);
      setFolders(cachedFolders);
    } else {
      getFiles(token, route)
        .then((result) => {
          const newSongs = getSongs(result.data);
          const newFolders = getFolders(result.data);

          const allFiles = newFolders.concat(newSongs);

          if (triggerUpdate && isRouteInCache >= 0) {
            updateFilesState({
              route,
              files: allFiles,
            });
          } else {
            saveFiles({
              route,
              files: allFiles,
            });
          }

          setFiles(newSongs);
          setFolders(newFolders);
        })
        .catch((error) => {
          if (error) {
            setFiles([]);
            setFolders([]);
          }
        });
    }

    setTriggerUpdate(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route, triggerUpdate]);

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
            key={file.name}
            fileName={file.name}
            route={route}
          />
        ))
      }

      {
        files.map((song, index) => (
          <LinkToSong
            key={song.name}
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

Files.defaultProps = {
  triggerUpdate: false,
  setTriggerUpdate: undefined,
};

Files.propTypes = {
  triggerUpdate: propTypes.bool,
  setTriggerUpdate: propTypes.func,
};

export default Files;
