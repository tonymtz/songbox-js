import React, { useState, useEffect } from 'react';
import Cookie from 'universal-cookie';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/app.scss';

import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Favorites from './components/Favorites';
import Settings from './components/Settings';
import Help from './components/Help';
import NotFound from './components/NotFound';

import auth from './auth/auth';

import AudioPlayer from './components/AudioPlayer';

const App = () => {
    const [isAuth, setIsAuth] = useState(false);
    const [currentSong, setCurrentSong] = useState('');
    const [queueSongs, setQueueSongs] = useState([]);
    const [songIndex, setSongIndex] = useState(0);

    useEffect(() => {
        const cookie = new Cookie();
        const token = cookie.get('dbx-token');

        const redirectURL = `${window.location.protocol}//${window.location.hostname}/login`;
		
        auth(token)
            .then((result) => {
                const validToken = result.data.status === 200 ? true : false;
                setIsAuth(validToken);

                if (!validToken) window.location.href  = redirectURL;
            })
            .catch(()=> {
                setIsAuth(false);
                window.location.href  = redirectURL;	
            });
    }, []);

    return (
        <>
            {
                isAuth &&
                <>
                    <BrowserRouter>
                        <div className="sidebar-container">
                            <Sidebar /> 
                        </div>
                        <div>
                            <Switch>
                                <Route 
                                    path="/app"
                                    render={() => 
                                        <Main 
                                            setCurrentSong={setCurrentSong}
                                            queueSongs={queueSongs} 
                                            setQueueSongs={setQueueSongs}
                                            songIndex={songIndex}
                                            setSongIndex={setSongIndex}    
                                        />}
                                />
                                <Route path="/favorites" render={() => <Favorites pageNumber={1}/>}  />
                                <Route path="/settings" render={() => <Settings pageNumber={2}/>} />
                                <Route path="/help" render={() => <Help pageNumber={3}/>} />
                                <Route path="*" component={NotFound} />
                            </Switch>
                        </div>
                        <AudioPlayer 
                            currentSong={currentSong}
                            queueSongs={queueSongs}
                            songIndex={songIndex}
                            setSongIndex={setSongIndex}
                            setCurrentSong={setCurrentSong}
                            setQueueSongs={setQueueSongs} 
                        />
                    </BrowserRouter>
                </>
            }	
        </>
    );
};

export default App;
