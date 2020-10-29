import React from 'react';


const AudioPlayerButton =  ({action, actionValue, icon, activeIcon, iconName}) => {
    return (
        <button onClick={action}>
            <img 
                src={actionValue ? activeIcon : icon}
                alt={iconName}
            />
        </button>
    );
};

export default AudioPlayerButton;