export const changeSlidebarIndex = (index) => {
    return {
        type: 'CHANGE_SLIDEBAR_INDEX',
        payload: index
    };
};

export const changeRoute = (route) => {
    return {
        type: 'CHANGE_ROUTE',
        payload: route
    };
};

export const changeSongIndex = (index) => {
    return {
        type: 'CHANGE_SONG_INDEX',
        payload: index
    };
};

export const changeSongsQueue = (newQueue) => {
    return {
        type: 'CHANGE_SONGS_QUEUE',
        payload: newQueue
    };
};

export const changeAuth = (auth) => {
    return {
        type: 'CHANGED_AUTH',
        payload: auth
    };
};

export const setUser = (user) => {
    return {
        type: 'SET_USER',
        payload: user,
    };
};

export const toggleRepeat = (repeat) => {
    return {
        type: 'TOGGLE_REPEAT',
        payload: repeat
    };
};

export const setFavorites = (favorites) => {
    return {
        type: 'SET_FAVORITES',
        payload: favorites
    };
};

export const addToFavorites = (newFavorite) => {
    return {
        type: 'ADD_FAVORITE',
        payload: newFavorite,
    };
};

export const removeFromFavorites = (songToRemove) => {
    return {
        type: 'REMOVE_FAVORITE',
        payload: songToRemove
    };
};

export const toggleFavoritePlaying = (isPlaying) => {
    return {
        type: 'TOGGLE_IS_PLAYING',
        payload: isPlaying
    };
};

export const addBrokenLink = (link) => {
    return {
        type: 'ADD_BROKEN_LINK',
        payload: link
    };
};

export const markSongAsBroken = (index) => {
    return {
        type: 'MARK_SONG_AS_BROKEN',
        payload: index
    };
};

export const changeAutoPlay = (newState) => {
    return {
        type: 'SET_AUTO_PLAY',
        payload: newState,
    };
};

export const changeDarkTheme = (newState) => {
    return {
        type: 'SET_DARK_THEME',
        payload: newState
    };
};

export const restorePreferences = () => {
    return {
        type: 'RESTORE_PREFERENCES',
    };
};