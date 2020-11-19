const routeReducer = (state = '/', { type, payload = '' }) => {
    switch (type) {
    case 'CHANGE_ROUTE':
        return payload;

    default:
        return state;
    }
};

export default routeReducer;