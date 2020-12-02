import React from 'react';
import propTypes from 'prop-types';

const Shuffle = ({ toggleOnRandom, onRandom }) => (
  <button type="button" className="player-button" onClick={toggleOnRandom}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={onRandom ? '#FFA834' : 'gray'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shuffle icon">
      <polyline points="16 3 21 3 21 8" />
      <line x1="4" y1="20" x2="21" y2="3" />
      <polyline points="21 16 21 21 16 21" />
      <line x1="15" y1="15" x2="21" y2="21" />
      <line x1="4" y1="4" x2="9" y2="9" />
    </svg>
  </button>
);

Shuffle.propTypes = {
  toggleOnRandom: propTypes.func,
  onRandom: propTypes.bool,
};

Shuffle.defaultProps = {
  toggleOnRandom: undefined,
  onRandom: undefined,
};

export default Shuffle;
