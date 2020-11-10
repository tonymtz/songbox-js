import React from 'react';

import fastForwardIcon from '../../icons/fast-forward.svg';

const Forward = ({ nextSong }) => {
    return (
        <button className="player-button" onClick={nextSong}>
            <img
                className="icon" 
                src={fastForwardIcon}
                alt={'fast-forward-icon'}
            />
        </button>
    );
};

export default Forward;