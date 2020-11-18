import React, { useState } from 'react';

import { addFavorite, removeFavorite } from '../../Favorites/favorites';

import './styles/favorite.scss';

const HeartFavorite = ({ fileName, path }) => {

    const [isFavorite, setIsFavorite] = useState(false);
    const markFavorite = async (e) => {
        if (!e) var e = window.event;
            e.cancelBubble = true;
        if (e.stopPropagation) e.stopPropagation();

        try {
            const file = {
                name: fileName,
                path_lower: path
            };

            if (!isFavorite) {
                setIsFavorite(true)
                await addFavorite(file);
            } else {
                setIsFavorite(false);
                await removeFavorite(file);
            }
                    
        }catch(error) {
            console.log(error);
        }
    }
    return (
        <svg onClick={markFavorite} className="feather feather-heart heart-icon icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={isFavorite ? "#8A8A8A" : "none"} stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
    );
};

export default HeartFavorite;