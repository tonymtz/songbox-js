import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Player from './Player/';
import Audio from './Audio';
import AudioProgress from './AudioProgress';
import Loading from '../Loading';

import { changeSongIndex, changeSongsQueue } from '../../redux/actions/';

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

    const dispatch = useDispatch();
    const setSongIndex = (index) => dispatch(changeSongIndex(index));
    const setSongsQueue = (newQueue) => dispatch(changeSongsQueue(newQueue));

    useEffect(() => {
        if (songsQueue.length <= 0) return;
        setIsLoading(true);

        if (songsQueue[songIndex].preview_url) {
            setCurrentSong(songsQueue[songIndex].preview_url);
            setSongsQueue(songsQueue);
        } else {
            getLink(songsQueue[songIndex].path_display)
                .then((result) => {
                    const songLink = result.replace('?dl=0', '').replace('www.', 'dl.');
                    songsQueue[songIndex].preview_url = songLink;

                    setCurrentSong(songLink);
                    setSongsQueue(songsQueue);
                })
                .catch((error) => {
                    throw new Error(error);
                });
        }
    }, [songsQueue, songIndex]);

    useEffect(() => {
        const singleSong = songsQueue.length === 1;
        setSingleSong(singleSong);
    }, [songsQueue]);

    const toggleOnRandom = () => setOnRandom(!onRandom);

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

    const nextSong = () => {
        if (onRandom) {
            selectRandom();
        } else {
            if (songIndex + 1 < songsQueue.length) {
                setSongIndex(songIndex + 1);
            } else if (onRepeat) {
                repeatPlaylist();
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
        <div className="audio-container">
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

            {
                isLoading ? (
                    <Loading />
                ) : (
                    <div className="audio-player">
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
                )
            }    
        </div>
    );
};

export default AudioPlayer;