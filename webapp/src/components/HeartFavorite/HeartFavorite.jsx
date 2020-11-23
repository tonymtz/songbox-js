import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addToFavorites, removeFromFavorites } from '../../redux/actions';
import { addFavorite, removeFavorite } from '../../Favorites/favorites';

import './styles/favorite.scss';

const HeartFavorite = ({ fileName, path }) => {

    const [isFavorite, setIsFavorite] = useState(false);

    const dispatch = useDispatch();
    const addToFavoritesState = (newFile) => dispatch(addToFavorites(newFile));
    const removeFromFavoritesState = (songToRemove) => dispatch(removeFromFavorites(songToRemove));

    const favorites = useSelector((state) => state.favorites.songs);
    const brokenLinks = useSelector((state) => state.brokenLinks);

    useEffect(() => {
        favorites.forEach(({ path_lower }) => {
            if (path.toLowerCase() === path_lower){
                setIsFavorite(true);
            }
        });
    }, [favorites]);

    useEffect(() => {
        const checkIfBroken = async () => {
            const lastPosition = brokenLinks.length - 1;
            const lastLink = brokenLinks[lastPosition];

            if (path.toLowerCase() === lastLink.toLowerCase()) {
                const file = {
                    song_name: fileName,
                    path_lower: path
                };

                setIsFavorite(false);
                removeFromFavoritesState(file);
                await removeFavorite(file);
            }
        }

        if (brokenLinks.length > 0 && favorites.length > 0) checkIfBroken();
    }, [brokenLinks]);

    const markFavorite = async (e) => {
        e.cancelBubble = true;
        if (e.stopPropagation) e.stopPropagation();

        try {
            const file = {
                song_name: fileName,
                path_lower: path
            };

            if (!isFavorite) {
                setIsFavorite(true);
                addToFavoritesState(file); 
                await addFavorite(file);
            } else {
                setIsFavorite(false);
                removeFromFavoritesState(file);
                await removeFavorite(file);
            }
          
        }catch(error) {
            console.log(error);
        }
    };
    return (
        <svg onClick={markFavorite} className="feather feather-heart heart-icon icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={isFavorite ? "#8A8A8A" : "none"} stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
    );
};

export default HeartFavorite;