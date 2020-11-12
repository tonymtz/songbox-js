import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toggleRepeat } from '../../../../redux/actions';

const Repeat = () => {

    const onRepeat = useSelector((state) => state.player.onRepeat);

    const dispatch = useDispatch();
    const toggleOnRepeat = () => dispatch((toggleRepeat(!onRepeat)));

    return(
        <button className="player-button" onClick={toggleOnRepeat}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={ onRepeat ? "#FFA834" : "gray"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-repeat icon"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>
        </button>
    );
};

export default Repeat;