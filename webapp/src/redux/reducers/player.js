const defaultPlayer = {
  onRepeat: false,
  autoPlay: true,
  darkTheme: false,
  currentSong: undefined,
  songName: '',
  fullFilename: false,
};

const playerReducer = (state = defaultPlayer, { type, payload }) => {
  switch (type) {
    case 'TOGGLE_REPEAT':
      return { ...state, onRepeat: payload };

    case 'SET_AUTO_PLAY':
      return { ...state, autoPlay: payload };

    case 'SET_DARK_THEME':
      return { ...state, darkTheme: payload };

    case 'SET_CURRENT_SONG':
      return { ...state, currentSong: payload };

    case 'SET_SONG_NAME':
      return { ...state, songName: payload };

    case 'SET_FULL_FILENAME':
      return { ...state, fullFilename: payload };

    case 'RESTORE_PREFERENCES':
      return {
        ...state,
        autoPlay: true,
        darkTheme: false,
        fullFilename: false,
      };

    default:
      return state;
  }
};

export default playerReducer;
