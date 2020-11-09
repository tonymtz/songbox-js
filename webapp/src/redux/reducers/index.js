import { combineReducers } from 'redux';

import slidebar from './slideBar';
import routeReducer from './route';
import songIndex from './songIndex';
import songsQueue from './songsQueue';
import auth from './auth';

const allReducers = combineReducers({
    slidebarIndex: slidebar,
    route: routeReducer,
    songIndex,
    songsQueue,
    auth
});

export default allReducers;