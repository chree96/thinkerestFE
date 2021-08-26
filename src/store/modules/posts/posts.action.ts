import axios from 'axios';
import {PostsActionType} from './posts.const';

export const getUserPosts = () => {
  return (dispatch: any) => {
    dispatch({type: PostsActionType.GET_USER_POSTS});
    axios
      .get(
        'http://api.openweathermap.org/data/2.5/group?id=668737,2643743,3165524&units=metric&lang=it&appid=6754d26c649cf9f0f97649359c3bed9b',
      )
      .then(response => {
        dispatch({
          type: PostsActionType.STORE_USER_POSTS,
          payload: response.data.list,
        });
      })
      .catch(error => {
        dispatch({
          type: PostsActionType.RETRIEVE_USER_POSTS_FAILURE,
          payload: error,
        });
      });
  };
};
