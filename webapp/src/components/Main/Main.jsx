import React from 'react';

import Breadcrumb from '../Breadcrumb';
import Files from '../Files';

import './style/style.scss';

const Main = ({ route, setRoute, setCurrentSong, queueSongs, setQueueSongs, setSongIndex }) => {


    return (
        <div className="App">
            <div className="content-container">
                <h1 className="title">Your personal library</h1>
                <Breadcrumb
                    route={route}
                    setRoute={setRoute}
                />
                <Files
                    key={route}
                    route={route}
                    setRoute={setRoute}
                    setCurrentSong={setCurrentSong}
                    queueSongs={queueSongs}
                    setQueueSongs={setQueueSongs}
                    setSongIndex={setSongIndex}
                />
            </div>
        </div>
    );
};

export default Main;