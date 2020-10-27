import React, { useState } from 'react';

import Directory from '../Directory';
import Files from '../Files';
import AudioPlayer from '../AudioPlayer';

import './style/style.scss';

const Main = () => {
    const [route, setRoute] = useState('/');
    const [songs, setSongs] = useState([]);
    const [songsIndex, setSongsIndex] = useState(0);

    return (
        <div className="App">
            <div className="content-container">
                <h1 className="title">Your personal library</h1>
                <Directory
                    route={route}
                    setRoute={setRoute}
                />
                <Files
                    route={route}
                    setRoute={setRoute}
                    setSongs={setSongs}
                    setSongsIndex={setSongsIndex}
                />
                <AudioPlayer
                    songs={songs}
                    songsIndex={songsIndex}
                /> 
            </div>
        </div>
    );
};

export default Main;