/* eslint-disable no-param-reassign */
/* eslint-disable no-multi-assign */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import propTypes from 'prop-types';

const AudioProgress = ({ progress, audioPlayer, currentSong }) => {
  const changeProgress = (e) => {
    if (audioPlayer && currentSong) {
      const screenWidth = window.innerWidth;
      const xPosition = e.pageX;

      const moveToPercentage = (xPosition * 100) / screenWidth;
      const moveTo = (audioPlayer.current.duration * moveToPercentage) / 100;

      audioPlayer.current.currentTime = moveTo;
    }
  };

  return (
    <div className="progress-bar-container">
      <ProgressBar onClick={changeProgress} variant="warning" now={progress} />
    </div>
  );
};

AudioProgress.propTypes = {
  progress: propTypes.number,
  audioPlayer: propTypes.any.isRequired,
  currentSong: propTypes.string,
};

AudioProgress.defaultProps = {
  progress: 0,
  currentSong: undefined,
};

export default AudioProgress;
