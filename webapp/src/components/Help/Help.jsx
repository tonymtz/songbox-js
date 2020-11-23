import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { changeSlidebarIndex } from '../../redux/actions';

import './styles/help.scss';

const Help = ({ pageNumber }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeSlidebarIndex(pageNumber));
    }, [dispatch, pageNumber]);

    return(
        <div className="content-container">
            <p id="your-personal-library" className="title">Help</p>
            <div className="help-container">
                <p>Hello im just a filler!</p>
            </div>
        </div>
    );
};

export default Help;