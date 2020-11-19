import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeSongIndex, changeSongsQueue, toggleFavoritePlaying } from '../../redux/actions/';

import HeartFavorite from '../HeartFavorite/';

const LinkToSong = ({ index, fileName, samePlaylist, files, path, inFavorites }) => {

    const [isPlaying, setIsPlaying] = useState(false);

    const songIndex = useSelector((state) => state.songIndex);
    const favoritePlaying = useSelector((state) => state.favorites.isPlaying);
    const dispatch = useDispatch();

    const setSongsQueue = (newQueue) => dispatch(changeSongsQueue(newQueue)); 
    const toggleFavoritePlayingState = (isPlaying) => dispatch(toggleFavoritePlaying(isPlaying));
    const setSongIndex = (index) => dispatch(changeSongIndex(index));

    const selectSong = () => {
        setSongIndex(index);
        setIsPlaying(true);
        setSongsQueue(files);

        if (inFavorites) toggleFavoritePlayingState(true);
        else toggleFavoritePlayingState(false);
    };

    useEffect(() => {
        if (inFavorites) {
            const expression = (index === songIndex) && favoritePlaying;
            setIsPlaying(expression);
        } else {
            const expression = (index === songIndex) && samePlaylist;
            setIsPlaying(expression);
        }

        return () => setIsPlaying(false);
    }, [songIndex, samePlaylist]);

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