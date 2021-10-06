import axios from 'axios';
import {HttpAddress} from '../../../services/http/HttpService';
import {MoviesActionType} from './movies.const';

export const getSearchSectionMovies = () => {
  return (dispatch: any) => {
    dispatch({type: MoviesActionType.RETRIEVE_SEARCH_SECTION_MOVIES});
    axios
      .get(HttpAddress + 'get-search-section-movies')
      .then(response => {
        const {topRated, byGenre, recommended} = response?.data?.results;
        dispatch({
          type: MoviesActionType.STORE_TOP_RATED_MOVIES,
          payload: topRated,
        });
        dispatch({
          type: MoviesActionType.STORE_MOVIES_BY_GENRE,
          payload: byGenre,
        });
        dispatch({
          type: MoviesActionType.STORE_RECOMMENDED_MOVIES,
          payload: recommended,
        });
      })
      .catch(error => {
        dispatch({
          type: MoviesActionType.RETRIEVE_MOVIES_FAILURE,
          payload: error,
        });
      });
  };
};
