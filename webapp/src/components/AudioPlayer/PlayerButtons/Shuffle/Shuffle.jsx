import React from 'react';

const Shuffle = ({ toggleOnRandom, onRandom }) => {

    return (
        <button  className="player-button" onClick={toggleOnRandom}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={ onRandom ? "#FFA834" : "gray"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shuffle icon"><polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line></svg>
        </button>
    );
};

export default Shuffle;