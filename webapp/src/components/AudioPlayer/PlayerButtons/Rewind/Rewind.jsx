import React from 'react';
import rewindIcon from '../../icons/rewind.svg';

const Previous = ({ previousSong }) => {
    return (
        <button className="player-button" onClick={previousSong}>
            <img 
                className="icon" 
                src={rewindIcon}
                alt={'rewind-icon'}
            />
        </button>
    );
};

export default Previous;