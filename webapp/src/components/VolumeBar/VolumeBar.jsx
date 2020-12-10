/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import propTypes from 'prop-types';

import './style/volume.scss';

const VolumeBar = ({ barShowing, audioPlayer }) => {
  const [volume, setVolume] = useState(0.5);

  const clickVolume = (e) => e.stopPropagation();

  const updateVolume = (e) => {
    const nextVolume = !Number.isNaN(e.target.value) ? e.target.value : 0.5;
    setVolume(nextVolume);

    if (nextVolume && audioPlayer) {
      // eslint-disable-next-line no-param-reassign
      audioPlayer.current.volume = nextVolume;
    }
  };

  const style = {
    // eslint-disable max-len
    background: `linear-gradient(to right, rgb(240, 211, 48) ${volume * 100}%, #c7c7c7 ${volume * 100}%)`,
  };

  return (
    <div className={`${barShowing ? '' : 'hide'} volume-bar`} onClick={clickVolume} role="button" onKeyDown={clickVolume} tabIndex={-1}>
      <input
        onChange={updateVolume}
        type="range"
        style={style}
        value={volume}
        min={0}
        max={1}
        step={0.01}
      />
    </div>
  );
};

VolumeBar.propTypes = {
  barShowing: propTypes.bool,
  audioPlayer: propTypes.any.isRequired,
};

VolumeBar.defaultProps = {
  barShowing: false,
  audioPlayer: propTypes.any.isRequired,
};

export default VolumeBar;
