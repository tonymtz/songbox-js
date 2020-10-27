import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookie from 'universal-cookie';

import Player from './Player';

const AudioPlayer = ({ songs, songsIndex }) => {
    const [songsQueue, setSongsQueue] = useState([]);
    const [currentSong, setCurrentSong] = useState('');
    const [index, setIndex] = useState(0);
    const [onRepeat, setOnRepeat] = useState(false);
    const [isRandom, setIsRandom] = useState(false);
    const [singleSong, setSingleSong] = useState(false);

    const getLink = async (path) => {
        const cookie = new Cookie();
        const token = cookie.get('dbx-token');

        try {
            const url = `${window.location.protocol}//${window.location.hostname}/api/file${path}`;
            const resposne = await axios.get(url, {
                headers: {
                    'Content-Type': 'application/json',
                    'dbx-token': `${token}`
                }
            });

            const songLink = resposne.data.result.preview_url;
            return songLink;
        } catch (error) {
            return [];
        }
    };
	
    useEffect(() => {
        if (songs.length > 0) {
            setSingleSong(songs.length === 1);

            const songsLink = songs.map((song) => {
                return getLink(song.path_display);
            });

            Promise.all(songsLink)
                .then((result) => {
                    const finalLinks = result.map((song) => song.replace('dl=0', 'dl=1'));	

                    setIndex(songsIndex);
                    setSongsQueue(finalLinks);
                    setCurrentSong(finalLinks[songsIndex]);
                })
                .catch(() =>{
                    setSongsQueue([]);
                });
        }
    }, [songs, songsIndex]);

    useEffect(() =>{
        setCurrentSong(songsQueue[index]);
    },[index]);


    const next = () => {
        if (onRepeat && index >= songsQueue.length - 1) {
            setIndex(0);
        } else if (index < songsQueue.length - 1) {
            setIndex(index + 1);
        }
    };
	
    const previous = () => {
        if (index > 0){
            setIndex(index - 1);
        }
    };

    const toggleRepeat = () => {
        setOnRepeat(!onRepeat);
    };

    const randomSong = () => {
        setIsRandom(!isRandom);
    };
	
    return(
        <div>
            <Player
                key={currentSong}
                currentSong={currentSong}
                next={next}
                previous={previous}
                chooseRandom={randomSong}
                toggleRepeat={toggleRepeat}
                onRepeat={onRepeat}
                isRandom={isRandom}
                singleSong={singleSong}
            />
        </div>
    );
};

export default AudioPlayer;