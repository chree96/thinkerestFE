import axios from 'axios';
import {ContentType} from '../../../types/user-actions';
import {PostsActionType} from './posts.const';

export const getHomePosts = () => {
  return (dispatch: any) => {
    dispatch({type: PostsActionType.GET_HOME_POSTS});
    axios
      .get('http://10.0.2.2:3030/home-posts')
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

export const setContentType = (contentType: ContentType) => {
  return (dispatch: any) => {
    dispatch({type: PostsActionType.SET_CONTENT_TYPE, payload: contentType});
  };
};
