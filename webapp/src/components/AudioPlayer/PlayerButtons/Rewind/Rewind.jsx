import React from 'react';
import { useSelector } from 'react-redux';
import propTypes from 'prop-types';

import rewindIcon from '../../icons/rewind.svg';

const Previous = ({ previousSong }) => {
  const songIndex = useSelector((state) => state.songIndex);
  const isDisabled = songIndex - 1 < 0;

  return (
    <button type="button" className={`player-button ${isDisabled ? 'disable-buttons' : ''}`} onClick={previousSong} disabled={isDisabled}>
      <img
        className="icon"
        src={rewindIcon}
        alt="rewind-icon"
      />
    </button>
  );
};

Previous.propTypes = {
  previousSong: propTypes.func,
};

Previous.defaultProps = {
  previousSong: undefined,
};

export default Previous;
