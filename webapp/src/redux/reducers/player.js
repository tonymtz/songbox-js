const defaultPlayer = {
    onRepeat: false,

};

const playerReducer = (state = defaultPlayer, { type, payload }) => {
    switch (type) {
    case 'TOGGLE_REPEAT':
        return {...state, onRepeat: payload};

    default:
        return state;
    }
};

export default playerReducer;