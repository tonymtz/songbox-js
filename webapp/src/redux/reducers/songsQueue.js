const songsQueueReducer = (state = [], { type, payload = []}) => {

    switch(type) {
    case 'CHANGE_SONGS_QUEUE':
        return payload;
    
    default:
        return state;
    }
};

export default songsQueueReducer;