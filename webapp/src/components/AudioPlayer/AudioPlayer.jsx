import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Player from './Player/';
import Audio from './Audio';
import AudioProgress from './AudioProgress';
import Loading from '../Loading';

import { changeSongIndex, changeSongsQueue, addBrokenLink, markSongAsBroken } from '../../redux/actions/';

import getLink from '../../Links/getLink';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style/player.scss';
import './style/progress.scss';

const AudioPlayer = () => {
    const [onRandom, setOnRandom] = useState(false);
    const [singleSong, setSingleSong] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSong, setCurrentSong] = useState('');
    const [progress, setProgress] = useState(0);

    const songIndex = useSelector((state) => state.songIndex);
    const songsQueue = useSelector((state) => state.songsQueue);
    const onRepeat = useSelector((state) => state.player.onRepeat);
    const darkThemeActive = useSelector((state) => state.player.darkTheme);

    const dispatch = useDispatch();
    const setSongIndex = (index) => dispatch(changeSongIndex(index));
    const setSongsQueue = (newQueue) => dispatch(changeSongsQueue(newQueue));
    const addBrokenLinkState = (path) => dispatch(addBrokenLink(path));
    const markSongAsBrokenState = (index) => dispatch(markSongAsBroken(index));

    useEffect(() => {
        if (songsQueue.length <= 0) return;
        setIsLoading(true);

        if (songsQueue[songIndex].broken) {
            skipToAvailableSong();
            return;
        }

        if (songsQueue[songIndex].preview_url) {
            setCurrentSong(songsQueue[songIndex].preview_url);
            setSongsQueue(songsQueue);
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
                })
                .catch((error) => {
                    addBrokenLinkState(path.toLowerCase());
                    markSongAsBrokenState(songIndex);
                    skipToAvailableSong();
                });
        }
    }, [songIndex, songsQueue]);

    useEffect(() => {
        const singleSong = songsQueue.length === 1;
        setSingleSong(singleSong);
    }, [songsQueue]);

    const toggleOnRandom = () => setOnRandom(!onRandom);

    const skipToAvailableSong = () => {
        const index = findNextAvailableSong(songsQueue, songIndex);
        if (index >= 0) nextSong(index);
        else setIsPlaying(false); 
    }

    const findNextAvailableSong = (array, currentIndex) => {
        const startingIndex = currentIndex;
        let wentBack = false;

        for (let i = currentIndex; i < array.length; i++) {
            if (wentBack && i === startingIndex) return -1;

            if (!array[i].broken) return i;
            if (i === array.length - 1) {
                i = -1;
                wentBack = true;
            }
        }

        return -1;
    }

    const repeatPlaylist = () => {
        if (songIndex + 1 >= songsQueue.length) {
            setSongIndex(0);
        };
    }

    const previousSong = () => {
        if (songIndex > 0) {
            setSongIndex(songIndex - 1);
        }
    };

    const nextSong = (index) => {
        if (Number.isInteger(index)) {
            setSongIndex(index);
            return;
        }

        if (onRandom) {
            selectRandom();
        } else {
            if (songIndex + 1 < songsQueue.length) {
                setSongIndex(songIndex + 1);
            } else if (onRepeat) {
                repeatPlaylist();
            } else {
                setIsPlaying(false);
            }
        }
    };

    const selectRandom = () => {
        if (singleSong) return;
        const randomNumber = Math.floor(Math.random() * songsQueue.length);

        if (randomNumber === songIndex) {
            return selectRandom();
        } else {
            setSongIndex(randomNumber);
        }
    };

    const play = () => setIsPlaying(!isPlaying);

    return (
        <div className={`audio-container ${darkThemeActive ? 'dark-theme-background' : '' }`}>
            <Audio
                key={currentSong}
                currentSong={currentSong}
                singleSong={singleSong}
                setProgress={setProgress}
                setIsLoading={setIsLoading}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                onRepeat={onRepeat}
                nextSong={nextSong}
            />

            <>
                <Loading 
                    isLoading={isLoading}
                />

                <div className={`audio-player ${isLoading ? 'hide' : ''} ${darkThemeActive ? 'dark-theme-background' : '' }`}>
                    <AudioProgress 
                        progress={progress}
                    />
                    <Player
                        previousSong={previousSong}
                        isPlaying={isPlaying}
                        play={play}
                        nextSong={nextSong}
                        toggleOnRandom={toggleOnRandom}
                        onRandom={onRandom}                          
                    />
                </div>  
            </>
        </div>
    );
};

export default AudioPlayer;