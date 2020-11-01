import React from 'react';

import playIcon from '../../icons/play-circle.svg';
import pauseIcon from '../../icons/pause-circle.svg';

const Play = ({ play, isPlaying }) => {
    return (
        <button onClick={play}>
            <img 
                src={isPlaying ? pauseIcon : playIcon}
                alt={isPlaying ? 'pause-icon' : 'play-icon'}
            />
        </button>
    );
};

export default Play;