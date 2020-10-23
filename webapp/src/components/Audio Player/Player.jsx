import  React, { useState, useEffect} from 'react';

const Player = ({ currentSong }) => {
	const [audioPlayer] = useState(React.createRef());
	
	useEffect(() =>{
		if (currentSong) {    
			audioPlayer.current.play();
		}
	}, [currentSong, audioPlayer]);

	return (
		<div>
			<h1>Hola soy tu audioplayer</h1>
			<audio ref={audioPlayer} id="audio-player" controls>
				<source src={currentSong} type="audio/mp3"/>
				<source src={currentSong} type="audio/wav"/>
				<source src={currentSong} type="audio/ogg"/>
			</audio>
		</div>
	);
};

export default Player;