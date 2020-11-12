import  React from 'react';
import { useSelector } from 'react-redux';

import Repeat from '../PlayerButtons/Repeat';
import Rewind from '../PlayerButtons/Rewind';
import Play from '../PlayerButtons/Play';
import Forward from '../PlayerButtons/Forward';
import Shuffle from '../PlayerButtons/Shuffle';

const Player = ({ previousSong, isPlaying, play, nextSong, toggleOnRandom, onRandom}) => {

    const queueExists = useSelector((state) => state.songsQueue);
    const isDisable = queueExists.length <= 0;

    return (
        <div className={`buttons ${isDisable ? 'disable-buttons' : ''}`}>
            <Repeat />

            <Rewind
                previousSong={previousSong}
            /> 

            <Play
                play={play}
                isPlaying={isPlaying}
            />

            <Forward
                nextSong={nextSong}
            />

            <Shuffle
                toggleOnRandom={toggleOnRandom}
                onRandom={onRandom}
            />
        </div>
    );
};

export default Player;

