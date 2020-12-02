import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AiFillHome } from 'react-icons/ai';

import { changeRoute } from '../../redux/actions';

import './style/home.scss';

const Home = () => {
  const dispatch = useDispatch();

  return (
    <div className="home-container">
      <Link to="/app">
        <AiFillHome
          className="icon home-icon"
          onClick={() => {
            dispatch(changeRoute('/'));
          }}
          alt="home-button"
        />
      </Link>
    </div>
  );
};

export default Home;
