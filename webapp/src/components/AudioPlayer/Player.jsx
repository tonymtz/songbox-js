import  React, { useState } from 'react';

import './style/player.scss';

const Player = ({ currentSong, previousSong, nextSong, onRepeat, toggleOnRepeat, onRandom, toggleOnRandom, singleSong }) => {
    const [audioPlayer] = useState(React.createRef());
    const [isPlaying, setIsPlaying] = useState(false);

    const onLoadSong = () => {
        if (audioPlayer) {
            audioPlayer.current.play()
                .then(() => {

                }).catch(() => {

                });
            setIsPlaying(true);
        }
    };


    const play = () => {
        if (isPlaying) {
            audioPlayer.current.pause();
            setIsPlaying(false);
        } else {
            audioPlayer.current.play();
            setIsPlaying(true);
        }
    };

    const songEnded = () => {
        if (singleSong && onRepeat) { 
            console.log('repeat single song');
            audioPlayer.current.currentTime = 0;
            audioPlayer.current.play();
        } else if (audioPlayer.current.ended) {
            nextSong();
        }
    };

    return (
        <div>
            <h1>Hola soy tu audioplayer</h1>
            <audio onLoadStart={onLoadSong} onPause={songEnded} ref={audioPlayer} id="audio-player" controls>
                <source src={currentSong} type="audio/mp3"/>
                <source src={currentSong} type="audio/wav"/>
                <source src={currentSong} type="audio/ogg"/>
            </audio>

            <button className={onRepeat? 'button-active' : ''} onClick={toggleOnRepeat}>Repeat</button>
            <button onClick={previousSong}>Previous</button>
            <button onClick={play}>{isPlaying ? 'Pause' : 'Play'}</button>
            <button onClick={nextSong}>Next</button>
            <button className={onRandom ? 'button-active' : ''} onClick={toggleOnRandom}>Random</button>
        </div>
    );
};

export default Player;