import React, { useState } from 'react';

const SongIcon = ({ isPlaying, isBroken }) => {

    return (
        isBroken ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-play-circle icon">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
        ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={isPlaying ? "#808080" : "none"} stroke={"gray"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-play-circle icon">
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="10 8 16 12 10 16 10 8" stroke={isPlaying ? "white": ""}></polygon>
            </svg>
        )
    );
};

export default SongIcon;