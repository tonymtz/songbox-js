import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import LinkToSong from '../Files/LinkToSong';

import { changeSlidebarIndex } from '../../redux/actions';

import { getFavorites } from '../../Favorites/favorites';

const Favorites = ({ pageNumber }) => {

    const [favorites, setFavorites] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeSlidebarIndex(pageNumber));
        const favorites = async () => {
            const userFavorites = await getFavorites();
            setFavorites(userFavorites.data);
        }

        favorites();
    }, [dispatch, pageNumber]);

    return(
        <div className="content-container">
                <h1 id="your-personal-library" className="title">Your personal library ❤️</h1>
                <div className="files-container">
                    {
                        favorites.map((favorite, index) => {
                            return (
                            <LinkToSong
                                key={index}
                                index={index}
                                fileName={favorite.song_name}
                                samePlaylist={false}
                                files={favorites}
                                path={favorite.path_lower}
                            />)
                        })
                    }
                </div>
        </div>
    );
};

export default Favorites;