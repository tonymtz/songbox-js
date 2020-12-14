import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import swal from 'sweetalert';

import { addFavorite } from '../../../Favorites/favorites';
import { addToFavorites } from '../../../store/actions';

import '../style/song.scss';

const SongName = ({ showingName }) => {
  const currentSong = useSelector((state) => state.player.currentSong);
  const songPath = currentSong ? currentSong.path : '';

  const dispatch = useDispatch();
  const addToFavoritesState = (newFile) => dispatch(addToFavorites(newFile));

  const history = useHistory();

  const showInfo = () => {
    swal(`${showingName || 'Anonymous song'}`, {
      buttons: {
        favorite: 'Add favorite',
        folder: {
          text: 'Go to folder',
        },
        close: true,
      },
    })
      .then(async (value) => {
        switch (value) {
        case 'favorite': {
          const successfull = await addFavorite(currentSong);
          if (successfull) {
            addToFavoritesState(currentSong);
          }

          swal({
            icon: successfull ? 'sucess' : 'error',
            text: successfull ? 'Added to favorites!' : 'Service not available, try again later.',
          });
        }
          break;

        case 'folder': {
          const appRoute = `/app${songPath}`;
          history.push(appRoute);
        }
          break;

        default:
          break;
        }
      });
  };

  return (
    showingName ? (
      <div className="display-name-container" onClick={showInfo} role="button" onKeyDown={showInfo} tabIndex={0}>
        <p className="file-name-playing">{showingName}</p>
        <svg className="feather feather-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      </div>
    )
      : (
        <p className="file-name-playing">Select an audio file to play</p>
      ));
};

SongName.propTypes = {
  showingName: propTypes.string,
};

SongName.defaultProps = {
  showingName: '',
};

export default SongName;
