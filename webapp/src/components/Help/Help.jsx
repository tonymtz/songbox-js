import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { changeSlidebarIndex } from '../../redux/actions';
const Help = ({ pageNumber }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeSlidebarIndex(pageNumber));
    }, [dispatch, pageNumber]);

    return(
        <div>
            <p>This is the help page!</p>
        </div>
    );
};

export default Help;