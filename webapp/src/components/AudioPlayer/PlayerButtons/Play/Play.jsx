import React from 'react';

import playIcon from '../../icons/play-circle.svg';
import pauseIcon from '../../icons/pause-circle.svg';

const Play = ({ play, isPlaying }) => {
    return (
        <button className="play-button" onClick={play}>

            <img 
                className={`icon play-icon ${!isPlaying && 'hide'}`} 
                src={pauseIcon}
                alt={'pause-icon'}
            />

            <img 
                className={`icon play-icon ${isPlaying && 'hide'}`} 
                src={playIcon}
                alt={'play-icon'}
            />
        </button>
    );
};

export default Play;