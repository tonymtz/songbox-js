import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeSongIndex, changeSongsQueue, toggleFavoritePlaying } from '../../redux/actions/';

import SongIcon from '../SongIcon/';
import HeartFavorite from '../HeartFavorite/';

const LinkToSong = ({ index, fileName, samePlaylist, files, path, inFavorites }) => {

    const [isPlaying, setIsPlaying] = useState(false);
    const [isBroken, setIsBroken] = useState(false);

    const songIndex = useSelector((state) => state.songIndex);
    const favoritePlaying = useSelector((state) => state.favorites.isPlaying);
    const brokenLinks = useSelector((state) => state.brokenLinks);
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
        const found = brokenLinks.find((link) => link.toLowerCase() === path.toLowerCase());
        setIsBroken(!!found);
    }, [brokenLinks]);

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
        <div onClick={selectSong} className={`file-container ${isPlaying && !isBroken ? 'is-playing' : ''} ${isBroken ? 'broken-link' : ''}`}>
            <SongIcon 
                isPlaying={isPlaying}
                isBroken={isBroken}
            />
            <div className="file-name-container">
                <p className="file-name">{'Unnamed file' && fileName}</p>
                {isBroken && <p>We could not find this song...</p>}
            </div>
            {
                !isBroken &&
                <HeartFavorite
                    fileName={fileName} 
                    path={path}
                />
            }
            
        </div>
    );
};

export default LinkToSong;