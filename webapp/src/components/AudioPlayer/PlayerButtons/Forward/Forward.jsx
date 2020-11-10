import React from 'react';
import { useSelector } from 'react-redux';

import fastForwardIcon from '../../icons/fast-forward.svg';

const Forward = ({ nextSong }) => {

    const songIndex = useSelector((state) => state.songIndex);
    const songsQueue = useSelector((state) => state.songsQueue);
    const isDisabled = songIndex + 1 >= songsQueue.length;

    return (
        <button className="player-button" onClick={nextSong} disabled={isDisabled}>
            <img
                className="icon" 
                src={fastForwardIcon}
                alt={'fast-forward-icon'}
            />
        </button>
    );
};

export default Forward;