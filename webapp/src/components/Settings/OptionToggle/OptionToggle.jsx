import React, { useState } from 'react';
import IOSSwitch from '../IOSSwitch';

const OptionToggle = ({ optionTitle, checked, toggle }) => {
    return (
        <div className="option-toggle-container">
            <p className="option-title">{optionTitle ? optionTitle : 'Unnamed option'}</p>
            <IOSSwitch
                checked={checked}
                onClick={toggle}
            />
        </div>
    );
};

export default OptionToggle;