/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import Player from './Player';
import Audio from './Audio';
import AudioProgress from './AudioProgress';
import Loading from '../Loading';

import {
  changeSongIndex, changeSongsQueue, addBrokenLink, markSongAsBroken, setSong,
} from '../../store/actions';

import getLink from '../../Links/getLink';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style/player.scss';
import './style/progress.scss';

const AudioPlayer = ({ closeSidebar }) => {
  const [audioPlayer] = useState(React.createRef());

  const [onRandom, setOnRandom] = useState(false);
  const [singleSong, setSingleSong] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState('');
  const [progress, setProgress] = useState(0);
  const [showingName, setShowingName] = useState('');

  const songIndex = useSelector((state) => state.songIndex);
  const songsQueue = useSelector((state) => state.songsQueue);
  const onRepeat = useSelector((state) => state.player.onRepeat);
  const darkThemeActive = useSelector((state) => state.player.darkTheme);
  const song = useSelector((state) => state.player.currentSong);
  const showFullFilename = useSelector((state) => state.player.fullFilename);

  const dispatch = useDispatch();

  const setSongIndex = (index) => dispatch(changeSongIndex(index));
  const addBrokenLinkState = (path) => dispatch(addBrokenLink(path));
  const markSongAsBrokenState = (index) => dispatch(markSongAsBroken(index));
  const setSongsQueue = (newQueue) => dispatch(changeSongsQueue(newQueue));
  const setSongState = (name) => dispatch(setSong(name));

  const repeatPlaylist = () => {
    if (songIndex + 1 >= songsQueue.length) {
      setSongIndex(0);
    }
  };

  const previousSong = () => {
    if (songIndex > 0) {
      setSongIndex(songIndex - 1);
    }
  };

  const selectRandom = () => {
    if (singleSong) return;
    const randomNumber = Math.floor(Math.random() * songsQueue.length);

    if (randomNumber === songIndex) {
      // eslint-disable-next-line consistent-return
      return selectRandom();
    }
    setSongIndex(randomNumber);
  };

  const nextSong = (index) => {
    if (Number.isInteger(index)) {
      setSongIndex(index);
      return;
    }

    if (onRandom) {
      selectRandom();
    } else if (songIndex + 1 < songsQueue.length) {
      setSongIndex(songIndex + 1);
    } else if (onRepeat) {
      repeatPlaylist();
    } else {
      setIsPlaying(false);
    }
  };

  const play = () => {
    if (currentSong) {
      if (isPlaying) {
        audioPlayer.current.pause();
        setIsPlaying(false);
      } else {
        audioPlayer.current.play();
        setIsPlaying(true);
      }
    }
  };

  const findNextAvailableSong = (array, currentIndex) => {
    const startingIndex = currentIndex;
    let wentBack = false;

    for (let i = currentIndex; i < array.length; i += 1) {
      if (wentBack && i === startingIndex) return -1;

      if (!array[i].broken) return i;
      if (i === array.length - 1) {
        i = -1;
        wentBack = true;
      }
    }

    return -1;
  };

  const toggleOnRandom = () => setOnRandom(!onRandom);

  useEffect(() => {
    const skipToAvailableSong = () => {
      const index = findNextAvailableSong(songsQueue, songIndex);
      if (index >= 0) nextSong(index);
      else setIsPlaying(false);
    };

    if (songsQueue.length <= 0) return;
    setIsLoading(true);

    if (songsQueue[songIndex].broken) {
      skipToAvailableSong();
      return;
    }

    if (songsQueue[songIndex].preview_url) {
      setCurrentSong(songsQueue[songIndex].preview_url);
      setSongsQueue(songsQueue);

      const songTemp = songsQueue[songIndex];
      const songName = songTemp.name || songTemp.song_name;

      setSongState(songTemp);
      setShowingName(songName);
    } else {
      const path = songsQueue[songIndex].path_display || songsQueue[songIndex].path_lower;

      getLink(path)
        .then((result) => {
          if (!result) {
            addBrokenLinkState(path.toLowerCase());
            markSongAsBrokenState(songIndex);
            skipToAvailableSong();
          } else {
            const songLink = result.replace('?dl=0', '').replace('www.', 'dl.');
            songsQueue[songIndex].preview_url = songLink;

            setCurrentSong(songLink);
            setSongsQueue(songsQueue);
          }

          const songTemp = songsQueue[songIndex];
          const songName = songTemp.name || songTemp.song_name;

          setSongState(songTemp);
          setShowingName(songName);
        })
        .catch(() => {
          addBrokenLinkState(path.toLowerCase());
          markSongAsBrokenState(songIndex);
          skipToAvailableSong();
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [songIndex, songsQueue]);

  useEffect(() => {
    const singleSongTemp = songsQueue.length === 1;
    setSingleSong(singleSongTemp);
  }, [songsQueue]);

  useEffect(() => {
    if (!song) return;
    const songName = song.name;

    if (!showFullFilename && songName) {
      setShowingName(songName.replace(/\.?(mp3|ogg|wav)$/, ''));
    } else if (songName) {
      setShowingName(songName);
    }
  }, [showFullFilename, song, currentSong, isPlaying]);

  useEffect(() => {
    document.title = showingName || 'Songbox';
  }, [showingName]);

  return (
    <div className={`audio-container ${darkThemeActive ? 'dark-theme-background' : ''}`} onClick={closeSidebar} onKeyDown={closeSidebar}>
      <Audio
        key={currentSong}
        currentSong={currentSong}
        singleSong={singleSong}
        setProgress={setProgress}
        setIsLoading={setIsLoading}
        setIsPlaying={setIsPlaying}
        onRepeat={onRepeat}
        nextSong={nextSong}
        audioPlayer={audioPlayer}
      />

      <>
        <Loading
          isLoading={isLoading}
        />

        <div className={`audio-player ${isLoading ? 'hide' : ''} ${darkThemeActive ? 'dark-theme-background' : ''}`}>
          <AudioProgress
            progress={progress}
            audioPlayer={audioPlayer}
            currentSong={currentSong}
            setProgress={setProgress}
          />
          <Player
            previousSong={previousSong}
            isPlaying={isPlaying}
            play={play}
            nextSong={nextSong}
            toggleOnRandom={toggleOnRandom}
            onRandom={onRandom}
            showingName={showingName}
            audioPlayer={audioPlayer}
          />
        </div>
      </>
    </div>
  );
};

AudioPlayer.defaultProps = {
  closeSidebar: undefined,
};

AudioPlayer.propTypes = {
  closeSidebar: propTypes.func,
};

export default AudioPlayer;
