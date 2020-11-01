import React from 'react';

import fastForwardIcon from '../../icons/fast-forward.svg';

const Forward = ({ nextSong }) => {
    return (
        <button onClick={nextSong}>
            <img 
                src={fastForwardIcon}
                alt={'fast-forward-icon'}
            />
        </button>
    );
};

export default Forward;