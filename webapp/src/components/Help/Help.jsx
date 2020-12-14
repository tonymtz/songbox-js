import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';

import { changeSlidebarIndex } from '../../store/actions';

import './styles/help.scss';

const Help = ({ pageNumber }) => {
  const dispatch = useDispatch();
  const darkThemeActive = useSelector((state) => state.player.darkTheme);

  useEffect(() => {
    dispatch(changeSlidebarIndex(pageNumber));
  }, [dispatch, pageNumber]);

  return (
    <div className={`content-container ${darkThemeActive ? 'dark-theme-background dark-theme-color' : ''}`}>
      <p id="your-personal-library" className="title">Help</p>
      <div className="help-container">
        <p>Hello im just a filler!</p>
      </div>
    </div>
  );
};

Help.propTypes = {
  pageNumber: propTypes.number,
};

Help.defaultProps = {
  pageNumber: 0,
};

export default Help;
