import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookie from 'universal-cookie';

import Player from './Player';

const AudioPlayer = ({ songs }) => {
	const [songsQueue, setSongsQueue] = useState([]);
	const [currentSong, setCurrentSong] = useState('');
	const [index, setIndex] = useState(0);

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
		if (songs.length > 0) {
			const songsLink = songs.map((song) => {
				return getLink(song.path_display);
			});

			Promise.all(songsLink)
				.then((result) => {
					const finalLinks = result.map((song) => song.replace('dl=0', 'dl=1'));
					setSongsQueue(finalLinks);
					setCurrentSong(finalLinks[0]);
				})
				.catch(() =>{
					setSongsQueue([]);
				});
		}
		setIndex(0);
	}, [songs]);

	useEffect(() =>{
		setCurrentSong(songsQueue[index]);
	},[index]);


	const next = () => {		
		if (index < songsQueue.length - 1) {
			setIndex(index + 1);
		}
	};
	
	const previous = () => {
		if (index > 0){
			setIndex(index - 1);
		}
	};
	
	return(
		<div>
			<Player
				key={currentSong}
				currentSong={currentSong}
			/>
			<button onClick={previous}>Previous</button>
			<button onClick={next}>Next</button>
		</div>
	);
};

export default AudioPlayer;