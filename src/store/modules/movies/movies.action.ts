import axios from 'axios';
import {MoviesActionType} from './movies.const';

export const getTopRatedMovies = () => {
  return (dispatch: any) => {
    dispatch({type: MoviesActionType.RETRIEVE_TOP_RATED_MOVIES});
    axios
      .get(
        'http://api.openweathermap.org/data/2.5/group?id=668737,2643743,3165524&units=metric&lang=it&appid=6754d26c649cf9f0f97649359c3bed9b',
      )
      .then(response => {
        dispatch({
          type: MoviesActionType.STORE_TOP_RATED_MOVIES,
          payload: response.data.list,
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
