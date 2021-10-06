import {STATE_KEY} from './movies.const';
import {MoviesState} from './movies.types';

const mainSelector = (state: any) => state[STATE_KEY] as MoviesState;

export const retrieveMoviesLoader = (state: any) =>
  mainSelector(state).isLoading;
export const retrieveTopRatedMovies = (state: any) =>
  mainSelector(state).topRatedMovies;
export const retrieveMoviesByGenre = (state: any) =>
  mainSelector(state).moviesByGenre;
export const retrieveRecommendedMovies = (state: any) =>
  mainSelector(state).recommendedMovies;
