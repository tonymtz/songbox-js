export const changeSlidebarIndex = (index) =>{
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