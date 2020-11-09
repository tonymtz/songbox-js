import React from 'react';
import Cookie from 'universal-cookie';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { changeAuth } from '../../redux/actions';

const Logout = () => {
    const dispatch = useDispatch();
    const changeAuthState = (newState) => dispatch(changeAuth(newState));

    useEffect(() => {
        const cookie = new Cookie();
        cookie.remove('dbx-token');
        changeAuthState(false);

        const redirectURL = `${window.location.protocol}//${window.location.hostname}/login`;
        window.location.href  = redirectURL;
    }, []);

    return(
        <div>

        </div>
    );
};

export default Logout;