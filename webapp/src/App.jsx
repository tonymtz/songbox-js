import React, { useEffect } from 'react';
import Cookie from 'universal-cookie';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'; 
import { changeAuth, setUser } from './redux/actions';

import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Favorites from './components/Favorites';
import Settings from './components/Settings';
import Help from './components/Help';
import NotFound from './components/NotFound';
import AudioPlayer from './components/AudioPlayer';
import Logout from './components/Logout';

import auth from './auth/auth';

import './styles/app.scss';


const App = () => {
    const isAuth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        const changeAuthState = (isAuth) => dispatch(changeAuth(isAuth));
        const setUserState = (user) => dispatch(setUser(user));

        const tokenName = 'dbx-token';
        const cookie = new Cookie();
        const token = cookie.get(tokenName);

        const redirectURL = `${window.location.protocol}//${window.location.hostname}/login`;
		
        auth(token)
            .then((result) => {
                const validToken = result.data.status === 200 ? true : false;
                if (!validToken) {
                    cookie.remove(tokenName);
                    window.location.href  = redirectURL;
                } else {
                    const user = result.data.result;
                    setUserState(user);
                    changeAuthState(true);
                }
            })
            .catch(()=> {
                cookie.remove(tokenName);
                window.location.href  = redirectURL;	
            });
    }, [isAuth]);

    return (
        <>
            {
                isAuth &&
                <>
                    <BrowserRouter>
                        <div className="sidebar-container">
                            <Sidebar /> 
                        </div>
                        <>
                            <Switch>
                                <Route path="/app" component={Main} />
                                <Route path={`/app/:path`} component={Main} />
                                <Route path="/favorites" render={() => <Favorites pageNumber={1}/>}  />
                                <Route path="/settings" render={() => <Settings pageNumber={2}/>} />
                                <Route path="/help" render={() => <Help pageNumber={3}/>} />
                                <Route path="/logout" render={() => <Logout />} />
                                <Route path="*" component={NotFound} />
                            </Switch>
                        </>
                        <AudioPlayer />
                    </BrowserRouter>
                </>
            }	
        </>
    );
};

export default App;
