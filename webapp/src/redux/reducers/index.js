import { combineReducers } from 'redux';

import slidebar from './slideBar';
import routeReducer from './route';

const allReducers = combineReducers({
    slidebarIndex: slidebar,
    route: routeReducer
});

export default allReducers;