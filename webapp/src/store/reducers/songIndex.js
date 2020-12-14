const songIndexReducer = (state = 0, { type, payload = 0 }) => {
  switch (type) {
    case 'CHANGE_SONG_INDEX':
      return payload;

    default:
      return state;
  }
};

export default songIndexReducer;
