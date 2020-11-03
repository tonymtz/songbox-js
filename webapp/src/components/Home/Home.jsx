import React from 'react';
import { Link } from 'react-router-dom';

import './style/home.css';

import home from './icons/home.svg';

const Home = ({ setRoute }) => {
    return (
        <div className="home-container">
            <Link to="/app">
                <img
                    className="icon"
                    onClick={() => {
                        setRoute('/');
                    }}
                    src={home}
                    alt={'home-button'}
                />
            </Link>
        </div>
    );
};

export default Home;