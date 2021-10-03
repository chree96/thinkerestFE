import axios from 'axios';
import {HttpAddress} from '../../../services/http/HttpService';
import {PostsActionType} from './posts.const';

export const getHomePosts = () => {
  return (dispatch: any) => {
    dispatch({type: PostsActionType.GET_HOME_POSTS});
    axios
      .get(HttpAddress + 'home-posts')
      .then(response => {
        dispatch({
          type: PostsActionType.STORE_USER_POSTS,
          payload: response.data.results,
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
