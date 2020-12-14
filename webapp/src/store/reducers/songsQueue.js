const songsQueueReducer = (state = [], { type, payload }) => {
  switch (type) {
    case 'CHANGE_SONGS_QUEUE':
      return payload;

    case 'MARK_SONG_AS_BROKEN':
      // eslint-disable-next-line no-case-declarations
      const newState = [...state];
      newState[payload].broken = true;
      return newState;

    default:
      return state;
  }
};

export default songsQueueReducer;
