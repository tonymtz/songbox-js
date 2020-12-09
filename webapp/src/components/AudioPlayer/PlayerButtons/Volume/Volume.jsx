import React, { useState } from 'react';

import VolumeBar from '../../../VolumeBar';

import volumeIcon from '../../icons/volume-2.svg';

const Volume = () => {
  const [barShowing, setBarShowing] = useState(false);

  const showVolume = () => setBarShowing(!barShowing);

  return (
    <>
      <button type="button" className="player-button volume-button" onClick={showVolume}>
        <VolumeBar
          barShowing={barShowing}
        />
        <img
          src={volumeIcon}
          alt="volume-icon"
        />
      </button>
    </>
  );
};

export default Volume;
