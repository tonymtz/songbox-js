import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookie from 'universal-cookie';

import Player from './Player';

const AudioPlayer = ({ songs }) => {
	const [songsQueue, setSongsQueue] = useState([]);
	const [currentSong, setCurrentSong] = useState('');

	const getLink = async (path) => {
		const cookie = new Cookie();
		const token = cookie.get('dbx-token');

		try {
			const url = `${window.location.protocol}//${window.location.hostname}/api/file${path}`;
			const resposne = await axios.get(url, {
				headers: {
					'Content-Type': 'application/json',
					'dbx-token': `${token}`
				}
			});

			const songLink = resposne.data.result.preview_url;
			return songLink;
		} catch (error) {
			return [];
		}
	};
	
	useEffect(() => {
		if (songs) {
			console.log('new list!');

			const songsLink = songs.map((song) => {
				return getLink(song.path_display);
			});

			Promise.all(songsLink)
				.then((result) => {
					const finalLinks = result.map((song) => song.replace('dl=0', 'dl=1'));
					setSongsQueue(finalLinks);
				})
				.catch(() =>{
					setSongsQueue([]);
				});
		}
	}, [songs]);

	const previousSong = () => {
		console.log('previous song!');
	};
	
	const nextSong = () => {
		console.log('Next song!');
	};

	const play = async () => {
		setCurrentSong(songsQueue[0]);
	};

	return(
		<div>
			<Player
				key={currentSong}
				currentSong={currentSong}
			/>
			<button onClick={previousSong}>Previous</button>
			<button onClick={play}>PLAY</button> 
			<button onClick={nextSong}>Next</button>
		</div>
	);
};

export default AudioPlayer;