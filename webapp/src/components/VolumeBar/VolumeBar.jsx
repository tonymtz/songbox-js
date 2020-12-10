import React from 'react';
import propTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { setVolume } from '../../redux/actions';

import './style/volume.scss';

const VolumeBar = ({ barShowing }) => {
  const volume = useSelector((state) => state.player.volume);

  const dispatch = useDispatch();
  const setVolumeState = (newVolume) => dispatch(setVolume(newVolume));

  const clickVolume = (e) => e.stopPropagation();
  const updateVolume = (e) => setVolumeState(e.target.value);

  const style = {
    // eslint-disable max-len
    background: `linear-gradient(to right, rgb(240, 211, 48) ${volume * 100}%, #c7c7c7 ${volume * 100}%)`,
  };

  return (
    <div className={`${barShowing ? '' : 'hide'} volume-bar`} onInput={clickVolume} role="button" onKeyDown={clickVolume} tabIndex={-1}>
      <input
        onChange={updateVolume}
        type="range"
        style={style}
        value={volume}
        min={0}
        max={1}
        step={0.01}
      />
    </div>
  );
};

VolumeBar.propTypes = {
  barShowing: propTypes.bool,
};

VolumeBar.defaultProps = {
  barShowing: false,
};

export default VolumeBar;
