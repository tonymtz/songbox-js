import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { changeRoute } from '../../redux/actions/';

import './style/home.css';
import home from './icons/home.svg';

const Home = () => {

    const dispatch = useDispatch();

    return (
        <div className="home-container">
            <Link to="/app">
                <img
                    className="icon"
                    onClick={() => {
                        dispatch(changeRoute('/'));
                    }}
                    src={home}
                    alt={'home-button'}
                />
            </Link>
        </div>
    );
};

export default Home;