/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import propTypes from 'prop-types';

const Option = ({ optionText, onClick, option }) => (
  <>

    {
      option === 'pref' ? (
        <button
          className="option-title option-hover pref-button"
          onClick={() => onClick()}
          type="button"
        >
          { optionText || 'Unammed option'}
        </button>
      ) : (
        <h4
          className="option-title option-hover"
          onClick={() => onClick()}
        >
          { optionText || 'Unammed option'}
        </h4>
      )
    }

  </>
);

Option.propTypes = {
  optionText: propTypes.string,
  onClick: propTypes.func,
  option: propTypes.string,
};

Option.defaultProps = {
  optionText: '',
  onClick: undefined,
  option: '',
};

export default Option;
