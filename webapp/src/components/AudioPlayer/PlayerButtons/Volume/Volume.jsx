/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import propTypes from 'prop-types';

import VolumeBar from '../../../VolumeBar';

import volumeIcon from '../../icons/volume-2.svg';

const Volume = ({ audioPlayer }) => {
  const [barShowing, setBarShowing] = useState(false);

  const showVolume = () => setBarShowing(!barShowing);

  return (
    <>
      <button type="button" className="player-button volume-button" onClick={showVolume}>
        <VolumeBar
          barShowing={barShowing}
          audioPlayer={audioPlayer}
        />
        <img
          src={volumeIcon}
          alt="volume-icon"
        />
      </button>
    </>
  );
};

Volume.propTypes = {
  audioPlayer: propTypes.any.isRequired,
};

Volume.defaultProps = {
  audioPlayer: propTypes.any.isRequired,
};

export default Volume;
