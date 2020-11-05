import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { changeSlidebarIndex } from '../../redux/actions';

const Settings = ({ pageNumber }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeSlidebarIndex(pageNumber));
    }, [dispatch, pageNumber]);


    return(
        <div>
            <p>This is the settings page!</p>
        </div>
    );
};

export default Settings;