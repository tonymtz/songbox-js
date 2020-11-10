import React from 'react';
import { useSelector } from 'react-redux';

import rewindIcon from '../../icons/rewind.svg';

const Previous = ({ previousSong }) => {

    const songIndex = useSelector((state) => state.songIndex);
    const isDisabled = songIndex - 1 < 0;

    return (
        <button className="player-button" onClick={previousSong} disabled={isDisabled}>
            <img 
                className="icon" 
                src={rewindIcon}
                alt={'rewind-icon'}
            />
        </button>
    );
};

export default Previous;