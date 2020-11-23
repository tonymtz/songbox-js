import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeSlidebarIndex, changeAutoPlay, changeDarkTheme, restorePreferences } from '../../redux/actions';

import OptionSection from './OptionSection';
import OptionToggle from './OptionToggle';
import Option from './Option'

import './styles/settings.scss'

const Settings = ({ pageNumber }) => {
    const dispatch = useDispatch();

    const autoPlayActive = useSelector((state) => state.player.autoPlay);
    const darkThemeActive = useSelector((state) => state.player.darkTheme);

    useEffect(() => {
        dispatch(changeSlidebarIndex(pageNumber));
    }, [dispatch, pageNumber]);

    const toggleAutoPlay = () => dispatch(changeAutoPlay(!autoPlayActive));
    const toggleDarkTheme = () => dispatch(changeDarkTheme(!darkThemeActive));
    const restorePreferencesFunc = () => dispatch(restorePreferences());

    return(
        <div className="content-container">
            <h1 id="your-personal-library" className="title">Settings</h1>
            <hr className="solid-gray-bar"/>
            <div className="settings-container">
                <OptionSection title={'Player'}>
                    <OptionToggle 
                        optionTitle={'Autoplay next song'}
                        toggle={toggleAutoPlay}
                        checked={autoPlayActive}
                    />
                </OptionSection>

                <OptionSection title={'Apparience'}>
                    <OptionToggle 
                        optionTitle={'Toggle dark theme'}
                        toggle={toggleDarkTheme}
                        checked={darkThemeActive}
                    />
                </OptionSection>

                <OptionSection title={'Other'}>
                    <Option 
                        optionText={'Restore preferences'}
                        onClick={restorePreferencesFunc}
                    />
                </OptionSection>

            </div>
        </div>
    );
};

export default Settings;