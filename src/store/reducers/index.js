import { combineReducers } from 'redux';

import movieReducer from './movieReducer.js';
import favoritesReducer from './favoritesReducer';
export default movieReducer;


export const reducers = combineReducers({
  favorites: favoritesReducer,
  movies: movieReducer,
})