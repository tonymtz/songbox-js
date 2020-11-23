import { combineReducers } from 'redux';

import slidebar from './slideBar';
import routeReducer from './route';
import songIndex from './songIndex';
import songsQueue from './songsQueue';
import auth from './auth';
import user from './user';
import player from './player';
import favorites from './favorites';
import brokenLinks from './brokenLinks';

const allReducers = combineReducers({
    slidebarIndex: slidebar,
    route: routeReducer,
    songIndex,
    songsQueue,
    auth,
    user,
    player,
    favorites,
    brokenLinks
});

export default allReducers;