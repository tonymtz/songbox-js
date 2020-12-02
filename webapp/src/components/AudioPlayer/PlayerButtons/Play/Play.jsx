import React from 'react';
import propTypes from 'prop-types';

import playIcon from '../../icons/play-circle.svg';
import pauseIcon from '../../icons/pause-circle.svg';

const Play = ({ play, isPlaying }) => (
  <button type="button" className="play-button" onClick={play}>

    <img
      className={`icon play-icon ${!isPlaying && 'hide'}`}
      src={pauseIcon}
      alt="pause-icon"
    />

    <img
      className={`icon play-icon ${isPlaying && 'hide'}`}
      src={playIcon}
      alt="play-icon"
    />
  </button>
);

Play.propTypes = {
  play: propTypes.func,
  isPlaying: propTypes.bool,
};

Play.defaultProps = {
  play: undefined,
  isPlaying: undefined,
};

export default Play;
