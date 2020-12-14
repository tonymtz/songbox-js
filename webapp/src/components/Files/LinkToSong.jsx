import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';

import { List } from 'immutable';
import { changeSongIndex, changeSongsQueue, toggleFavoritePlaying } from '../../store/actions';

import SongIcon from '../SongIcon';
import HeartFavorite from '../HeartFavorite';
import ContextMenu from '../ContextMenu';

const LinkToSong = ({
  index, fileName, samePlaylist, files, path, inFavorites,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBroken, setIsBroken] = useState(false);

  const songIndex = useSelector((state) => state.songIndex);
  const favoritePlaying = useSelector((state) => state.favorites.isPlaying);
  const brokenLinks = useSelector((state) => state.brokenLinks);
  const darkThemeActive = useSelector((state) => state.player.darkTheme);

  const dispatch = useDispatch();

  const setSongsQueue = (newQueue) => dispatch(changeSongsQueue(newQueue));
  const toggleFavoritePlayingState = (playing) => dispatch(toggleFavoritePlaying(playing));
  const setSongIndex = (sonIndex) => dispatch(changeSongIndex(sonIndex));

  const selectSong = () => {
    setSongIndex(index);
    setIsPlaying(true);
    setSongsQueue(files);

    if (inFavorites) toggleFavoritePlayingState(true);
    else toggleFavoritePlayingState(false);
  };

  useEffect(() => {
    const found = brokenLinks.find((link) => link.toLowerCase() === path.toLowerCase());
    setIsBroken(!!found);
  }, [brokenLinks, path]);

  useEffect(() => {
    if (inFavorites) {
      const expression = (index === songIndex) && favoritePlaying;
      setIsPlaying(expression);
    } else {
      const expression = (index === songIndex) && samePlaylist;
      setIsPlaying(expression);
    }

    return () => setIsPlaying(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [songIndex, samePlaylist]);

  return (
    /* eslint-disable jsx-a11y/no-static-element-interactions */
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div onClick={selectSong} className={`file-container ${isPlaying && !isBroken ? 'is-playing' : ''} ${isBroken ? 'broken-link' : ''}`}>
      <SongIcon
        isPlaying={isPlaying}
        isBroken={isBroken}
      />
      <div className="file-name-container">
        <p className={`file-name ${darkThemeActive ? 'dark-theme-color' : ''}`}>{'Unnamed file' && fileName}</p>
        {isBroken && <p>We could not find this song...</p>}
      </div>
      {
        !isBroken
                && (
                  <>
                    <HeartFavorite
                      fileName={fileName}
                      path={path}
                    />
                    <ContextMenu />
                  </>
                )
      }
    </div>
  );
};

LinkToSong.propTypes = {
  index: propTypes.number,
  fileName: propTypes.string,
  samePlaylist: propTypes.bool,
  files: propTypes.instanceOf(List).isRequired,
  path: propTypes.string,
  inFavorites: propTypes.bool,
};

LinkToSong.defaultProps = {
  index: 0,
  fileName: '',
  samePlaylist: false,
  path: '',
  inFavorites: false,
};

export default LinkToSong;
