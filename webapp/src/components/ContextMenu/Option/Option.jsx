import React from 'react';
import propTypes from 'prop-types';

const Option = ({ optionText, onClick }) => {
  const selectOption = (e) => {
    e.stopPropagation();
    onClick();
  };

  return (
    <li>
      <button className="option" onClick={selectOption} type="button">{ optionText }</button>
    </li>
  );
};

Option.defaultProps = {
  optionText: 'Unammed option',
  onClick: undefined,
};

Option.propTypes = {
  optionText: propTypes.string,
  onClick: propTypes.func,
};

export default Option;
