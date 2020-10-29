import React, { useState, useEffect } from 'react';

import Player from './Player';

import getLink from '../../Links/getLink';

const AudioPlayer = ({ currentSong, queueSongs, songIndex, setSongIndex, setCurrentSong, setQueueSongs }) => {

    const [onRepeat, setOnRepeat] = useState(false);
    const [onRandom, setOnRandom] = useState(false);
    const [singleSong, setSingleSong] = useState(false);

    useEffect(() => {
        if(queueSongs.length <= 0) return;

        if(queueSongs[songIndex].preview_url) {
            setCurrentSong(queueSongs[songIndex].preview_url);
            setQueueSongs(queueSongs);
        } else {
            getLink(queueSongs[songIndex].path_display)
                .then((result) => {
                    const songLink = result.replace('dl=0', 'dl=1');
                    queueSongs[songIndex].preview_url = songLink;     
                                  
                    setCurrentSong(songLink);
                    setQueueSongs(queueSongs);
                })
                .catch((error) => {
                    throw new Error(error);
                });
        }
    }, [songIndex]);

    useEffect(() => {
        setSingleSong(queueSongs.length === 1);
    }, [queueSongs]);

    const toggleOnRepeat = () => setOnRepeat(!onRepeat); 
    const toggleOnRandom = () => setOnRandom(!onRandom);

    const repeatPlaylist = () => {
        if (songIndex + 1 >= queueSongs.length){
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
            if (songIndex + 1 < queueSongs.length) {
                setSongIndex(songIndex + 1);          
            } else if(onRepeat) {
                repeatPlaylist();
            }
        }   
    };

    const selectRandom = () => {
        const randomNumber = Math.floor(Math.random() * queueSongs.length);

        if(randomNumber === songIndex) {
            return selectRandom();
        } else {
            setSongIndex(randomNumber);
        }
    };
 
	
    return(
        <>
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
            />
        </>
    );
};

export default AudioPlayer;