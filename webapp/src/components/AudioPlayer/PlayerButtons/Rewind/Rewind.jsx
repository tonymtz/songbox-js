import React from 'react';
import rewindIcon from '../../icons/rewind.svg';

const Previous = ({ previousSong }) => {
    return (
        <button onClick={previousSong}>
            <img 
                className="icon player-button" 
                src={rewindIcon}
                alt={'rewind-icon'}
            />
        </button>
    );
};

export default Previous;