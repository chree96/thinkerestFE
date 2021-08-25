import {MoviesActionType} from './movies.const';

const initialState = {
  movies: [],
  singleMovie: [],
  isLoading: false,
  error: null,
};

const moviesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case MoviesActionType.RETRIEVE_TOP_RATED_MOVIES:
      return Object.assign({}, state, {isLoading: true});
    case MoviesActionType.STORE_TOP_RATED_MOVIES:
      return Object.assign({}, state, {
        movies: action.payload,
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
