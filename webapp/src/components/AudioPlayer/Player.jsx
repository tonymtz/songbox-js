import  React, { useState, useEffect } from 'react';

import './style/player.scss';

import AudioPlayerButton from './AudioPlayerButton';
import AudioProgress from './AudioProgress';

import playIcon from './icons/play-circle.svg';
import pauseIcon from './icons/pause-circle.svg';
import repeatIcon from './icons/repeat.svg';
import repeatActiveIcon from './icons/repeat_active.svg';
import shuffleIcon from './icons/shuffle.svg';
import shuffleActiveIcon from './icons/shuffle_active.svg';
import rewindIcon from './icons/rewind.svg';
import fastForwardIcon from './icons/fast-forward.svg';

const Player = ({ currentSong, previousSong, nextSong, onRepeat, toggleOnRepeat, onRandom, toggleOnRandom, singleSong }) => {
    const [audioPlayer] = useState(React.createRef());
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let interval = setInterval(() => updateProcess(), 1000); 

        return () => {
            clearInterval(interval); 
        };
    }, []);

    const onLoadSong = () => {
        if (audioPlayer !== null) {
            audioPlayer.current.play()
                .then(() => {
                    setIsPlaying(true);
                }).catch(() => {
                    
                });               
        }
    };

    const updateProcess = () => {
        if (audioPlayer !== null && !audioPlayer.current.paused) {
            const currentTime = audioPlayer.current.currentTime;
            const totalTime = audioPlayer.current.duration;
            const progress = (currentTime / totalTime) * 100;
    
            setProgress(progress);
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
            audioPlayer.current.currentTime = 0;
            audioPlayer.current.play();
        } else if (audioPlayer.current.ended) {
            nextSong();
        }
    };

    return (
        <div className="audio-container">
            <audio onLoadStart={onLoadSong} onPause={songEnded} ref={audioPlayer} id="audio-player" controls>
                <source src={currentSong} type="audio/mp3"/>
                <source src={currentSong} type="audio/wav"/>
                <source src={currentSong} type="audio/ogg"/>
            </audio>

            <AudioProgress 
                key={progress}  
                process={progress}
            />

            <div className="buttons">
                <AudioPlayerButton 
                    action={toggleOnRepeat}
                    actionValue={onRepeat}
                    icon={repeatIcon}
                    activeIcon={repeatActiveIcon}
                    iconName={"repeat-icon"}
                />

                <AudioPlayerButton 
                    action={previousSong}
                    icon={rewindIcon}
                    activeIcon={rewindIcon}
                    iconName={"rewind-icon"}
                /> 

                <AudioPlayerButton 
                    action={play}
                    icon={isPlaying ? pauseIcon : playIcon}
                    iconName={isPlaying ? 'pause-icon' : 'play-icon'}
                />

                <AudioPlayerButton
                    action={nextSong}
                    icon={fastForwardIcon}
                    iconName={"fast-forward-icon"}
                />

                <AudioPlayerButton 
                    action={toggleOnRandom}
                    actionValue={onRandom}
                    icon={shuffleIcon}
                    activeIcon={shuffleActiveIcon}
                    iconName={"shuffle-icon"}
                />
            </div>
        </div>
    );
};

export default Player;

