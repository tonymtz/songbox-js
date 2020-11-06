import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Player from './Player/';

import { changeSongIndex, changeSongsQueue } from '../../redux/actions/';
import getLink from '../../Links/getLink';

const AudioPlayer = () => {

    const [onRepeat, setOnRepeat] = useState(false);
    const [onRandom, setOnRandom] = useState(false);
    const [singleSong, setSingleSong] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSong, setCurrentSong] = useState('');

    const songIndex = useSelector((state) => state.songIndex);
    const songsQueue = useSelector((state) => state.songsQueue);
    
    const dispatch = useDispatch();
    const setSongIndex = (index) => dispatch(changeSongIndex(index));
    const setSongsQueue = (newQueue) => dispatch(changeSongsQueue(newQueue));
    
    useEffect(() => {

        if(songsQueue.length <= 0) return;
        setIsLoading(true);

        if(songsQueue[songIndex].preview_url) {
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
        const isPlaying = songsQueue.length <= 0;

        setSingleSong(singleSong);
        setIsPlaying(!isPlaying);

    }, [songsQueue]);

    const toggleOnRepeat = () => setOnRepeat(!onRepeat); 
    const toggleOnRandom = () => setOnRandom(!onRandom);

    const repeatPlaylist = () => {
        if (songIndex + 1 >= songsQueue.length){
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
            } else if(onRepeat) {
                repeatPlaylist();
            }
        }   
    };

    const selectRandom = () => {
        if (singleSong) return;
        const randomNumber = Math.floor(Math.random() * songsQueue.length);

        if(randomNumber === songIndex) {
            return selectRandom();
        } else {
            setSongIndex(randomNumber);
        }
    };
 
	
    return(
        <>
            {
                isPlaying &&
                <Player
                    key={currentSong}
                    currentSong={currentSong}
                    previousSong={previousSong}
                    nextSong={nextSong}
                    onRepeat={onRepeat}
                    toggleOnRepeat={toggleOnRepeat}
                    onRandom={onRandom}
                    toggleOnRandom={toggleOnRandom}
                    singleSong={singleSong}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                />
            }
        </>
    );
};

export default AudioPlayer;