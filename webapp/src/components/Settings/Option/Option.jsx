/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import propTypes from 'prop-types';

const Option = ({ optionText, onClick }) => (
  <>
    <h4
      className="option-title option-hover"
      onClick={() => onClick()}
    >
      { optionText || 'Unammed option'}
    </h4>
  </>
);

Option.propTypes = {
  optionText: propTypes.string,
  onClick: propTypes.func,
};

Option.defaultProps = {
  optionText: '',
  onClick: undefined,
};

export default Option;
