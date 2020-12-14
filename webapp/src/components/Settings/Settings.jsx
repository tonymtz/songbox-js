import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';

import {
  changeSlidebarIndex, changeAutoPlay, changeDarkTheme, restorePreferences, setFullfilename,
} from '../../store/actions';

import OptionSection from './OptionSection';
import OptionToggle from './OptionToggle';
import Option from './Option';

import './styles/settings.scss';

const Settings = ({ pageNumber }) => {
  const dispatch = useDispatch();

  const autoPlayActive = useSelector((state) => state.player.autoPlay);
  const darkThemeActive = useSelector((state) => state.player.darkTheme);
  const fullFilename = useSelector((state) => state.player.fullFilename);

  useEffect(() => {
    dispatch(changeSlidebarIndex(pageNumber));
  }, [dispatch, pageNumber]);

  const toggleAutoPlay = () => dispatch(changeAutoPlay(!autoPlayActive));
  const toggleDarkTheme = () => dispatch(changeDarkTheme(!darkThemeActive));
  const toggleFullFilename = () => dispatch(setFullfilename(!fullFilename));
  const restorePreferencesFunc = () => dispatch(restorePreferences());

  return (
    <div className={`content-container ${darkThemeActive ? 'dark-theme-background dark-theme-color' : ''}`}>
      <h1 id="your-personal-library" className="title">Settings</h1>
      <hr className="solid-gray-bar" />
      <div className={`settings-container ${darkThemeActive ? 'dark-theme-background dark-theme-color' : ''}`}>
        <OptionSection title="Player">
          <OptionToggle
            optionTitle="Autoplay next song"
            toggle={toggleAutoPlay}
            checked={autoPlayActive}
          />
        </OptionSection>

        <OptionSection title="Apparience">
          <OptionToggle
            optionTitle="Toggle dark theme"
            toggle={toggleDarkTheme}
            checked={darkThemeActive}
          />
          <OptionToggle
            optionTitle="Show full filename"
            toggle={toggleFullFilename}
            checked={fullFilename}
          />
        </OptionSection>

        <OptionSection title="Other">
          <Option
            optionText="Restore preferences"
            onClick={restorePreferencesFunc}
            option="pref"
          />
        </OptionSection>

        <div className="copy-right-container">
          <p className="copy-right">Copyright © 2020, Songbox. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

Settings.propTypes = {
  pageNumber: propTypes.number,
};

Settings.defaultProps = {
  pageNumber: 0,
};

export default Settings;
