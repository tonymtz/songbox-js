export const changeSlidebarIndex = (index) =>{
    return {
        type: 'CHANGE_SLIDEBAR_INDEX',
        payload: index
    };
};

export const changeRoute = (route) => {
    return {
        type: 'CHANGE_ROUTE',
        payload: route
    };
};