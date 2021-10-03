import axios from 'axios';
import {HttpAddress} from '../../../services/http/HttpService';
import {MoviesActionType} from './movies.const';

export const getTopRatedMovies = () => {
  return (dispatch: any) => {
    dispatch({type: MoviesActionType.RETRIEVE_TOP_RATED_MOVIES});
    axios
      .get(HttpAddress + 'get-most-popular-movies')
      .then(response => {
        dispatch({
          type: MoviesActionType.STORE_TOP_RATED_MOVIES,
          payload: response.data.results,
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
