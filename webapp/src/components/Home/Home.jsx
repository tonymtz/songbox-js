import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';

import './style/home.scss';

const Home = () => (
  <div className="home-container">
    <Link to="/app">
      <AiFillHome
        className="icon home-icon"
        alt="home-button"
      />
    </Link>
  </div>
);

export default Home;
