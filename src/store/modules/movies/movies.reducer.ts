import {MoviesActionType} from './movies.const';
import {MoviesState} from './movies.types';

const initialState: MoviesState = {
  movies: [],
  singleMovie: [],
  topRatedMovies: [],
  isLoading: false,
  error: null,
};

const moviesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case MoviesActionType.RETRIEVE_TOP_RATED_MOVIES:
      return Object.assign({}, state, {isLoading: true});
    case MoviesActionType.STORE_TOP_RATED_MOVIES:
      return Object.assign({}, state, {
        topRatedMovies: action.payload,
        isLoading: false,
      });
    case MoviesActionType.RETRIEVE_MOVIES_FAILURE:
      return Object.assign({}, state, {
        error: action.payload,
        isLoading: false,
      });
    default:
      return state;
  }
};

export default moviesReducer;
