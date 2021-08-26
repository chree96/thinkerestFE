import {PostsActionType} from './posts.const';
import {PostsState} from './posts.types';

const initialState: PostsState = {
  posts: [],
  isLoading: false,
  error: null,
};

const postsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case PostsActionType.GET_USER_POSTS:
      return Object.assign({}, state, {isLoading: true});
    case PostsActionType.STORE_USER_POSTS:
      return Object.assign({}, state, {
        posts: action.payload,
        isLoading: false,
      });
    case PostsActionType.RETRIEVE_USER_POSTS_FAILURE:
      return Object.assign({}, state, {
        error: action.payload,
        isLoading: false,
      });
    default:
      return state;
  }
};

export default postsReducer;
