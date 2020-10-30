import React, { useState, useEffect } from 'react';

import playCircleIcon from './icons/play-circle.svg';
import heartIcon from './icons/heart.svg';

const LinkToSong = ({ index, fileName, songIndex, setSongIndex, samePlaylist, setQueueSongs, files}) => {

    const [isPlaying, setIsPlaying] = useState(false);

    const selectSong = () => {
        setQueueSongs(files);
        setSongIndex(index);
        setIsPlaying(true);
    };

    useEffect(() => {
        const expression = (index === songIndex) && samePlaylist;
        setIsPlaying(expression);

        return () => setIsPlaying(false);
    }, [songIndex]);

    return(
        <div onClick={selectSong} className={`file-container ${isPlaying ? 'is-playing' : ''}`}>
            <img 
                src={playCircleIcon}
                alt={'play-icon'}
            />
            <p className="file-name">{'Unnamed file' && fileName}</p>
            <img
                className="heart-icon"
                src={heartIcon}
                alt="heart-icon"
            />
        </div>
    );
};

export default LinkToSong;