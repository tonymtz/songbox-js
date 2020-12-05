import React from 'react';
import { useSelector } from 'react-redux';
import propTypes from 'prop-types';

import Repeat from '../PlayerButtons/Repeat';
import Rewind from '../PlayerButtons/Rewind';
import Play from '../PlayerButtons/Play';
import Forward from '../PlayerButtons/Forward';
import Shuffle from '../PlayerButtons/Shuffle';

const Player = ({
  previousSong, isPlaying, play, nextSong, toggleOnRandom, onRandom, showingName,
}) => {
  const queueExists = useSelector((state) => state.songsQueue);
  const isDisable = queueExists.length <= 0;

  return (
    <div className={`buttons ${isDisable ? 'disable-buttons' : ''}`}>
      <p className="file-name-playing">{ showingName ? `Playing: ${showingName}` : 'Select an audio file to play' }</p>
      <div className="buttons-container">
        <Repeat />

        <Rewind
          previousSong={previousSong}
        />

        <Play
          play={play}
          isPlaying={isPlaying}
        />

        <Forward
          nextSong={nextSong}
        />

        <Shuffle
          toggleOnRandom={toggleOnRandom}
          onRandom={onRandom}
        />
      </div>
    </div>
  );
};

Player.propTypes = {
  previousSong: propTypes.func,
  isPlaying: propTypes.bool,
  play: propTypes.func,
  nextSong: propTypes.func,
  toggleOnRandom: propTypes.func,
  onRandom: propTypes.bool,
  showingName: propTypes.string,
};

Player.defaultProps = {
  previousSong: undefined,
  isPlaying: undefined,
  play: undefined,
  nextSong: undefined,
  toggleOnRandom: undefined,
  onRandom: undefined,
  showingName: '',
};

export default Player;
