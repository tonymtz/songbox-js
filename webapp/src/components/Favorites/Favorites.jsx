import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LinkToSong from '../Files/LinkToSong';

import { changeSlidebarIndex } from '../../redux/actions';

const Favorites = ({ pageNumber }) => {
    const favorites = useSelector((state) => state.favorites.songs);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(changeSlidebarIndex(pageNumber));
    }, [pageNumber, dispatch]);

    return(
        <div className="content-container">
            <h1 id="your-personal-library" className="title">Your personal library <span role="img" aria-label="heart">❤️</span></h1>
            <div className="files-container">
                {
                    favorites.map((favorite, index) => {
                        return (
                            <LinkToSong
                                key={index}
                                index={index}
                                fileName={favorite.song_name || favorite.name}
                                samePlaylist={true}
                                files={favorites}
                                path={favorite.path_lower}
                                inFavorites={true}
                            />);
                    })
                }
            </div>
        </div>
    );
};

export default Favorites;