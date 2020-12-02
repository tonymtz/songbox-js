import React from 'react';
import propTypes from 'prop-types';
import IOSSwitch from '../IOSSwitch';

const OptionToggle = ({ optionTitle, checked, toggle }) => (
  <div className="option-toggle-container">
    <p className="option-title">{optionTitle || 'Unnamed option'}</p>
    <IOSSwitch
      checked={checked}
      onClick={toggle}
    />
  </div>
);

OptionToggle.propTypes = {
  optionTitle: propTypes.string,
  checked: propTypes.bool,
  toggle: propTypes.func,
};

OptionToggle.defaultProps = {
  optionTitle: '',
  checked: false,
  toggle: undefined,
};

export default OptionToggle;
