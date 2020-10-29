import  React, { useState, useEffect} from 'react';

import './style/player.scss';

const Player = ({ currentSong, previousSong, nextSong, onRepeat, toggleOnRepeat, onRandom, toggleOnRandom }) => {
    const [audioPlayer] = useState(React.createRef());
    const [isPlaying, setIsPlaying] = useState(false);
	
    useEffect(() =>{
        if (currentSong) {
            audioPlayer.current.play();
            setIsPlaying(true);
        }
    }, [currentSong]);


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
        if(audioPlayer.current.ended) {
            nextSong();
        }
    };

    return (
        <div>
            <h1>Hola soy tu audioplayer</h1>
            <audio onPause={songEnded} ref={audioPlayer} id="audio-player" controls>
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