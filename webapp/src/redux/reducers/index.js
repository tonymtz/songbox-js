import { combineReducers } from 'redux';

import slidebar from './slideBar';
import routeReducer from './route';
import songIndex from './songIndex';
import songsQueue from './songsQueue';

const allReducers = combineReducers({
    slidebarIndex: slidebar,
    route: routeReducer,
    songIndex,
    songsQueue
});

export default allReducers;