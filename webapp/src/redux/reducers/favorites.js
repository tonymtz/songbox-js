const initialState = {
  songs: [],
  isPlaying: false,
};

const favoritesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_FAVORITES':
      return {
        ...state,
        songs: payload,
      };

    case 'ADD_FAVORITE':
      return {
        ...state,
        songs: state.songs.concat(payload),
      };

    case 'REMOVE_FAVORITE':
      return {
        ...state,
        songs: state.songs.filter((song) => song.song_name !== payload.song_name),
      };

    case 'TOGGLE_IS_PLAYING':
      return {
        ...state,
        isPlaying: payload,
      };

    default:
      return state;
  }
};

export default favoritesReducer;
