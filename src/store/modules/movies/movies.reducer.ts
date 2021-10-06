import {MoviesActionType} from './movies.const';
import {MoviesState} from './movies.types';

const initialState: MoviesState = {
  movies: [],
  singleMovie: [],
  topRatedMovies: [],
  recommendedMovies: [],
  moviesByGenre: {
    action: [],
    romantic: [],
    adventure: [],
  },
  isLoading: false,
  error: null,
};

const moviesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case MoviesActionType.RETRIEVE_SEARCH_SECTION_MOVIES:
      return Object.assign({}, state, {isLoading: true});
    case MoviesActionType.STORE_TOP_RATED_MOVIES:
      return Object.assign({}, state, {
        topRatedMovies: action.payload,
        isLoading: false,
      });
    case MoviesActionType.STORE_MOVIES_BY_GENRE:
      return Object.assign({}, state, {
        moviesByGenre: action.payload,
        isLoading: false,
      });
    case MoviesActionType.STORE_RECOMMENDED_MOVIES:
      return Object.assign({}, state, {
        recommendedMovies: action.payload,
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
