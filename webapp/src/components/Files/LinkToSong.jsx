import React from 'react';

import getLink from '../../Links/getLink';

import './style/files.scss';
import playCircleIcon from './icons/play-circle.svg';
import heartIcon from './icons/heart.svg';

const LinkToSong = ({ fileName, path, setCurrentSong, index, setSongIndex, queueSongs, setQueueSongs }) => {

    const selectSong = () => {
        if(queueSongs[index].preview_url) {
            setSongIndex(index);
            setCurrentSong(queueSongs[index].preview_url);
            setQueueSongs(queueSongs);
        } else {
            getLink(path)
                .then((result) => {
                    const songLink = result.replace('dl=0', 'dl=1');
                    queueSongs[index].preview_url = songLink;     
                    
                    setSongIndex(index);
                    setCurrentSong(songLink);
                    setQueueSongs(queueSongs);
                })
                .catch((error) => {
                    throw new Error(error);
                });
        }
    };

    return(
        <div onClick={selectSong} className="file-container">
            <img 
                src={playCircleIcon}
                alt={'play-icon'}
            />
            <p className="file-name">{'Unnamed file' && fileName}</p>
            <img
                className="heart-icon"
                src={heartIcon}
                alt="heart-icon"
            />
        </div>
    );
};

export default LinkToSong;