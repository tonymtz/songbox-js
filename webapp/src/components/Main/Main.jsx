import React, { useState, useEffect} from 'react';

import Breadcrumb from '../Breadcrumb';
import Files from '../Files';

import { getRoute } from '../../route/route';

import './style/style.scss';

const Main = ({ route, setRoute, setCurrentSong, queueSongs, setQueueSongs, songIndex, setSongIndex }) => {

    const [correctPath, setCorrectPath] = useState(false);

    useEffect(() => {
        const pathFromURL = getRoute();
        if (route !== pathFromURL) {
            setRoute(pathFromURL);
        } 

        setCorrectPath(true);
    }, []);

    return (
        <div className="App">
            <div className="content-container">
                <h1 id="your-personal-library" className="title">Your personal library</h1>
                <Breadcrumb
                    route={route}
                    setRoute={setRoute}
                />
                        
                {
                    correctPath &&
                    <Files
                        key={route}
                        route={route}
                        setRoute={setRoute}
                        setCurrentSong={setCurrentSong}
                        queueSongs={queueSongs}
                        setQueueSongs={setQueueSongs}
                        songIndex={songIndex}
                        setSongIndex={setSongIndex}
                    />
                }
            </div>
        </div>
    );
};

export default Main;