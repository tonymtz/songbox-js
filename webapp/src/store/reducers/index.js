import { combineReducers } from 'redux';

import appReducer from './app';
import filesReducer from './files';
import slidebar from './slideBar';
import songIndex from './songIndex';
import songsQueue from './songsQueue';
import auth from './auth';
import user from './user';
import player from './player';
import favorites from './favorites';
import brokenLinks from './brokenLinks';
import menu from './menu';

export default combineReducers({
  app: appReducer,
  files: filesReducer,
  slidebarIndex: slidebar,
  songIndex,
  songsQueue,
  auth,
  user,
  player,
  favorites,
  brokenLinks,
  menu,
});
