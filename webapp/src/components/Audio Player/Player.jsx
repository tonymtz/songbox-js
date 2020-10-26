import  React, { useState, useEffect} from 'react';

import './style/player.scss';

const Player = ({ currentSong, previous, next, chooseRandom, toggleRepeat, onRepeat, isRandom, singleSong }) => {
	const [audioPlayer] = useState(React.createRef());
	const [isPlaying, setIsPlaying] = useState(false);
	
	useEffect(() =>{
		if (currentSong) {    
			audioPlayer.current.play();
			setIsPlaying(true);
		} else {
			setIsPlaying(false);
		} 
	}, [currentSong, audioPlayer]);


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
		if (audioPlayer.current.ended) {
			if (onRepeat && singleSong) {
				audioPlayer.current.play();
			} else {
				next();
			}
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

			<button className={onRepeat ? 'button-active' : ''} onClick={toggleRepeat}>Repeat</button>
			<button onClick={previous}>Previous</button>
			<button onClick={play}>{ isPlaying ? 'Pause' : 'Play'}</button>
			<button onClick={next}>Next</button>
			<button className={isRandom ? 'button-active' : ''} onClick={chooseRandom}>Random</button>
		</div>
	);
};

export default Player;