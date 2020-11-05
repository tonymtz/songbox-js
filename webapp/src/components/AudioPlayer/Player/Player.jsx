import  React, { useState, useEffect } from 'react';

import '../style/player.scss';

import Repeat from '../PlayerButtons/Repeat';
import Rewind from '../PlayerButtons/Rewind';
import Play from '../PlayerButtons/Play';
import Forward from '../PlayerButtons/Forward';
import Shuffle from '../PlayerButtons/Shuffle';

import AudioProgress from '../AudioProgress/';
import Loading from '../../Loading';

const Player = ({ currentSong, previousSong, nextSong, onRepeat, toggleOnRepeat, onRandom, toggleOnRandom, singleSong, isLoading, setIsLoading }) => {
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
            setIsLoading(false);
            audioPlayer.current.play()
                .then(() => {
                    //Auto play...
                    setIsPlaying(true);
                })
                .catch((error) => {
                    //Auto play is disabled
                    console.log(error);
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
        if (singleSong && onRepeat && audioPlayer.current.ended) { 
            audioPlayer.current.currentTime = 0;
            audioPlayer.current.play();
        } else if (audioPlayer.current.ended) {
            nextSong();
        }
    };

    return (
        <div className="audio-container">
            <audio onLoadedMetadata={onLoadSong} onPause={songEnded} ref={audioPlayer} id="audio-player" controls>
                <source src={currentSong} type="audio/mpeg"/>
                <source src={currentSong} type="audio/wav"/>
                <source src={currentSong} type="audio/ogg"/>
            </audio>
            {
                isLoading ? (
                    <Loading />
                ) :
                    <>
                        <AudioProgress 
                            key={progress}  
                            process={progress}
                        />

                        <div className="buttons">
                            <Repeat 
                                toggleOnRepeat={toggleOnRepeat}
                                onRepeat={onRepeat}
                            />

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
                    </>
            }
        </div>
    );
};

export default Player;

