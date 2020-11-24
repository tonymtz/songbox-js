import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Audio = ({ currentSong, singleSong, setProgress, setIsLoading, isPlaying, setIsPlaying, onRepeat, nextSong }) => {
    const [audioPlayer] = useState(React.createRef());
    const [muted, setMuted] = useState(true);

    const autoPlay = useSelector((state) => state.player.autoPlay);

    useEffect(() => {
        const updateProcess = () => {
            if (audioPlayer !== null && !audioPlayer.current.paused) {
                const currentTime = audioPlayer.current.currentTime;
                const totalTime = audioPlayer.current.duration;
                const progress = (currentTime / totalTime) * 100;
        
                setProgress(progress);
            }  
        };

        let interval = setInterval(() => updateProcess(), 333); 

        return () => {
            clearInterval(interval); 
        };
    }, [audioPlayer, setProgress]);

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

    const songEnded = () => {
        if (audioPlayer.current.ended) {
            setIsPlaying(false);
        }

        if (singleSong && onRepeat && audioPlayer.current.ended) { 
            audioPlayer.current.currentTime = 0;
            audioPlayer.current.play();
        } else if (audioPlayer.current.ended && autoPlay) {
            nextSong();
        } 
    };

    useEffect(() => {
        if (currentSong) {
            if (isPlaying) {
                audioPlayer.current.play();
                setMuted(false);
            } else {
                audioPlayer.current.pause();
                setMuted(true);
            }
        }
    }, [isPlaying, audioPlayer, currentSong]);
    
    return(
        <div className="audio">
            <audio id="audio-player" ref={audioPlayer} onLoadedMetadata={onLoadSong} onPause={songEnded} controls muted={muted} autoPlay={autoPlay}>
                <source src={currentSong} type="audio/mpeg"/>
                <source src={currentSong} type="audio/wav"/>
                <source src={currentSong} type="audio/ogg"/>
            </audio>
        </div>
    );
};

export default Audio;