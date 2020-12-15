export const changeSlidebarIndex = (index) => ({
  type: 'CHANGE_SLIDEBAR_INDEX',
  payload: index,
});

export const changeSongIndex = (index) => ({
  type: 'CHANGE_SONG_INDEX',
  payload: index,
});

export const changeSongsQueue = (newQueue) => ({
  type: 'CHANGE_SONGS_QUEUE',
  payload: newQueue,
});

export const changeAuth = (auth) => ({
  type: 'CHANGED_AUTH',
  payload: auth,
});

export const setUser = (user) => ({
  type: 'SET_USER',
  payload: user,
});

export const toggleRepeat = (repeat) => ({
  type: 'TOGGLE_REPEAT',
  payload: repeat,
});

export const setFavorites = (favorites) => ({
  type: 'SET_FAVORITES',
  payload: favorites,
});

export const addToFavorites = (newFavorite) => ({
  type: 'ADD_FAVORITE',
  payload: newFavorite,
});

export const removeFromFavorites = (songToRemove) => ({
  type: 'REMOVE_FAVORITE',
  payload: songToRemove,
});

export const toggleFavoritePlaying = (isPlaying) => ({
  type: 'TOGGLE_IS_PLAYING',
  payload: isPlaying,
});

export const addBrokenLink = (link) => ({
  type: 'ADD_BROKEN_LINK',
  payload: link,
});

export const markSongAsBroken = (index) => ({
  type: 'MARK_SONG_AS_BROKEN',
  payload: index,
});

export const changeAutoPlay = (newState) => ({
  type: 'SET_AUTO_PLAY',
  payload: newState,
});

export const changeDarkTheme = (newState) => ({
  type: 'SET_DARK_THEME',
  payload: newState,
});

export const restorePreferences = () => ({
  type: 'RESTORE_PREFERENCES',
});

export const setSong = (song) => ({
  type: 'SET_CURRENT_SONG',
  payload: song,
});

export const setFullfilename = (newState) => ({
  type: 'SET_FULL_FILENAME',
  payload: newState,
});

export const setVolume = (volume) => ({
  type: 'SET_VOLUME',
  payload: volume,
});

export const addFiles = (files) => ({
  type: 'ADD_FILE_ROUTE',
  payload: files,
});

export const updateFiles = (files) => ({
  type: 'UPDATE_FILE_ROUTE',
  payload: files,
});

export const toggleMenu = (toggle) => ({
  type: 'TOGGLE_MENU',
  payload: toggle,
});
