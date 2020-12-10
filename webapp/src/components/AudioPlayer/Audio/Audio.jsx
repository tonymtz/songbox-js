/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Audio = ({
  currentSong,
  singleSong,
  setProgress,
  setIsLoading,
  setIsPlaying,
  onRepeat,
  nextSong,
  audioPlayer,
}) => {
  const autoPlay = useSelector((state) => state.player.autoPlay);

  const onLoadSong = () => {
    if (audioPlayer !== null) {
      setIsLoading(false);
      audioPlayer.current.play()
        .then(() => {
          // Auto play...
          setIsPlaying(true);
        })
        .catch(() => {
          // Auto play is disabled
          setIsPlaying(false);
        });
    }
  };

  const songEnded = () => {
    if (audioPlayer.current.ended) {
      setIsPlaying(false);
    }

    if (singleSong && onRepeat && audioPlayer.current.ended) {
      // eslint-disable-next-line no-param-reassign
      audioPlayer.current.currentTime = 0;
      audioPlayer.current.play();
    } else if (audioPlayer.current.ended && autoPlay) {
      nextSong();
    }
  };

  useEffect(() => {
    const updateProcess = () => {
      if (audioPlayer !== null && !audioPlayer.current.paused) {
        const { currentTime } = audioPlayer.current;
        const totalTime = audioPlayer.current.duration;
        const progress = (currentTime / totalTime) * 100;

        setProgress(progress);
      }
    };

    const interval = setInterval(() => updateProcess(), 333);

    return () => {
      clearInterval(interval);
    };
  }, [audioPlayer, setProgress]);

  return (
    <div className="audio">
      <audio id="audio-player" ref={audioPlayer} onLoadedMetadata={onLoadSong} onPause={songEnded} controls autoPlay={autoPlay}>
        <track kind="captions" />
        <source src={currentSong} type="audio/mpeg" />
        <source src={currentSong} type="audio/wav" />
        <source src={currentSong} type="audio/ogg" />
      </audio>
    </div>
  );
};

Audio.propTypes = {
  currentSong: propTypes.string,
  singleSong: propTypes.bool,
  setProgress: propTypes.func,
  setIsLoading: propTypes.func,
  setIsPlaying: propTypes.func,
  onRepeat: propTypes.bool,
  nextSong: propTypes.func,
  audioPlayer: propTypes.any.isRequired,
};

Audio.defaultProps = {
  currentSong: '',
  singleSong: false,
  setProgress: () => 0,
  setIsLoading: () => false,
  setIsPlaying: () => false,
  onRepeat: false,
  nextSong: () => undefined,
  audioPlayer: propTypes.any.isRequired,
};

export default Audio;
