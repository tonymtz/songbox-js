const defaultPlayer = {
    onRepeat: false,
    autoPlay: true,
    darkTheme: false,
};

const playerReducer = (state = defaultPlayer, { type, payload }) => {
    switch (type) {
        case 'TOGGLE_REPEAT':
            return {...state, onRepeat: payload };

        case 'SET_AUTO_PLAY':
            return {...state, autoPlay: payload };

        case 'SET_DARK_THEME':
            return {...state, darkTheme: payload };

        case 'RESTORE_PREFERENCES':
            return {
                ...state,
                autoPlay: true,
                darkTheme: false,
            };

        default:
            return state;
    }
};

export default playerReducer;