/* eslint-disable no-param-reassign */
/* eslint-disable no-multi-assign */
/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react';
import { ProgressBar } from 'react-bootstrap';
import Draggable from 'react-draggable';
import propTypes from 'prop-types';

const AudioProgress = ({
  progress, audioPlayer, currentSong, setProgress,
}) => {
  const [showThumb, setShowThumb] = useState(false);
  const [showBar, setBarShow] = useState(false);
  const [thumbPos, setThumbPos] = useState(0);
  const [beingDrag, setBeingDrag] = useState(false);

  const nodeRef = React.useRef(null);

  const changeProgress = (e) => {
    if (audioPlayer && currentSong) {
      const screenWidth = window.innerWidth;
      const xPosition = e.pageX || e.clientX || e.touches[0].clientX;
      setThumbPos(xPosition - 20);

      const moveToPercentage = (xPosition * 100) / screenWidth;
      setProgress(moveToPercentage);
      const moveTo = (audioPlayer.current.duration * moveToPercentage) / 100;

      const { currentTime } = audioPlayer.current;
      audioPlayer.current.currentTime = Number.isNaN(moveTo) ? currentTime : moveTo;
    }
  };

  const startHover = () => {
    if (audioPlayer && currentSong) {
      setShowThumb(true);
      setBarShow(true);
    }
  };

  const stopHover = () => {
    if (audioPlayer && currentSong) {
      setShowThumb(false);
      setBarShow(false);
    }
  };

  const startDragging = () => setBeingDrag(true);

  const stopDrag = (e) => {
    changeProgress(e);
    setBeingDrag(false);
  };

  useEffect(() => {
    if (!beingDrag) {
      const calculatePosition = window.innerWidth * (progress / 100);
      setThumbPos(calculatePosition - 20);
    }
  }, [progress, beingDrag]);

  return (
    <div className="progress-bar-container">
      <Draggable
        axis="x"
        onStart={startDragging}
        onDrag={stopDrag}
        nodeRef={nodeRef}
        position={{ x: thumbPos, y: 0 }}
        disabled={false}
      >
        <div
          className={`${showThumb || showBar ? '' : 'hide'} ${currentSong ? '' : 'hide'} progress-indicator ${showThumb || showBar ? 'show' : ''} `}
          onMouseOver={startHover}
          onMouseLeave={stopHover}
          onFocus={() => undefined}
          aria-label="thumb"
          type="button"
          ref={nodeRef}
        />
      </Draggable>

      <ProgressBar
        onMouseOver={startHover}
        onMouseLeave={stopHover}
        onClick={changeProgress}
        variant="warning"
        className={`${showThumb || showBar ? 'progress-hover' : ''}`}
        now={progress}
      />
    </div>
  );
};

AudioProgress.propTypes = {
  progress: propTypes.number,
  audioPlayer: propTypes.any.isRequired,
  currentSong: propTypes.string,
  setProgress: propTypes.func,
};

AudioProgress.defaultProps = {
  progress: 0,
  currentSong: undefined,
  setProgress: undefined,
};

export default AudioProgress;
