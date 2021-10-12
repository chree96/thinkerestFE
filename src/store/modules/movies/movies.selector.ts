import {STATE_KEY} from './movies.const';
import {MoviesState} from './movies.types';

const mainSelector = (state: any) => state[STATE_KEY] as MoviesState;

export const retrieveMoviesLoader = (state: any) =>
  mainSelector(state).isLoading;
