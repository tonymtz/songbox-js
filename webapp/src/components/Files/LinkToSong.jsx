import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeSongIndex, changeSongsQueue } from '../../redux/actions/';

import HeartFavorite from '../HeartFavorite/';

const LinkToSong = ({ index, fileName, samePlaylist, files, path }) => {

    const [isPlaying, setIsPlaying] = useState(false);

    const songIndex = useSelector((state) => state.songIndex);
    const dispatch = useDispatch();

    const setSongsQueue = (newQueue) => dispatch(changeSongsQueue(newQueue)); 

    const selectSong = () => {
        setSongsQueue(files);
        dispatch(changeSongIndex(index));
        setIsPlaying(true);
    };

    useEffect(() => {
        const expression = (index === songIndex) && samePlaylist;
        setIsPlaying(expression);

        return () => setIsPlaying(false);
    }, [songIndex, index, samePlaylist]);

    return(
        <div onClick={selectSong} className={`file-container ${isPlaying ? 'is-playing' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={isPlaying ? "#808080" : "none"} stroke={"gray"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-play-circle icon">
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="10 8 16 12 10 16 10 8" stroke={isPlaying ? "white": ""}></polygon>
            </svg>
            <p className="file-name">{'Unnamed file' && fileName}</p>
            <HeartFavorite
                fileName={fileName} 
                path={path}
            />
        </div>
    );
};

export default LinkToSong;