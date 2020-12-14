const defaultPlayer = {
  onRepeat: false,
  autoPlay: true,
  darkTheme: false,
  currentSong: undefined,
  fullFilename: false,
  volume: 0.5,
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

    case 'SET_FULL_FILENAME':
      return { ...state, fullFilename: payload };

    case 'SET_VOLUME':
      return { ...state, volume: payload };

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
