import React from 'react';
import { useSelector } from 'react-redux';
import propTypes from 'prop-types';

import Repeat from '../PlayerButtons/Repeat';
import Rewind from '../PlayerButtons/Rewind';
import Play from '../PlayerButtons/Play';
import Forward from '../PlayerButtons/Forward';
import Shuffle from '../PlayerButtons/Shuffle';

const Player = ({
  previousSong, isPlaying, play, nextSong, toggleOnRandom, onRandom,
}) => {
  const queueExists = useSelector((state) => state.songsQueue);
  const isDisable = queueExists.length <= 0;

  return (
    <div className={`buttons ${isDisable ? 'disable-buttons' : ''}`}>
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
  );
};

Player.propTypes = {
  previousSong: propTypes.func,
  isPlaying: propTypes.bool,
  play: propTypes.func,
  nextSong: propTypes.func,
  toggleOnRandom: propTypes.func,
  onRandom: propTypes.bool,
};

Player.defaultProps = {
  previousSong: undefined,
  isPlaying: undefined,
  play: undefined,
  nextSong: undefined,
  toggleOnRandom: undefined,
  onRandom: undefined,
};

export default Player;
