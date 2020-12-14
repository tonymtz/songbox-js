import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';

import LinkToSong from '../Files/LinkToSong';

import { changeSlidebarIndex } from '../../store/actions';

const Favorites = ({ pageNumber }) => {
  const favorites = useSelector((state) => state.favorites.songs);
  const darkThemeActive = useSelector((state) => state.player.darkTheme);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeSlidebarIndex(pageNumber));
  }, [pageNumber, dispatch]);

  return (
    <div className={`content-container ${darkThemeActive ? 'dark-theme-background dark-theme-color' : ''}`}>
      <h1 id="your-personal-library" className="title">
        Your personal library
        <span role="img" aria-label="heart">❤️</span>
      </h1>
      <div className={`files-container ${darkThemeActive ? 'dark-theme-background dark-theme-color' : ''}`}>
        {
                        favorites.length > 0
                          ? favorites.map((favorite, index) => (
                            <LinkToSong
                              key={favorite.song_name || favorite.name}
                              index={index}
                              fileName={favorite.song_name || favorite.name}
                              samePlaylist
                              files={favorites}
                              path={favorite.path_lower}
                              inFavorites
                            />
                          ))
                          : (
                            <div className="no-favorites-container">
                              <p>No favorites songs...</p>
                            </div>
                          )
                    }
      </div>
    </div>
  );
};

Favorites.propTypes = {
  pageNumber: propTypes.number,
};

Favorites.defaultProps = {
  pageNumber: 0,
};

export default Favorites;
