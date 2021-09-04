import {colors} from '../../../style';
import {ContentType} from '../../../types/user-actions';
import getContentColor from '../../../utils/content/get-content-color';
import {PostsActionType} from './posts.const';
import {PostsState} from './posts.types';

const initialState: PostsState = {
  posts: [],
  isLoading: false,
  error: null,
  contentType: ContentType.general,
  contentColor: colors.solidWhite,
};

const postsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case PostsActionType.GET_HOME_POSTS:
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
    case PostsActionType.SET_CONTENT_TYPE:
      const content = action.payload as ContentType;
      return Object.assign({}, state, {
        contentType: content,
        contentColor: getContentColor(content),
      });
    default:
      return state;
  }
};

export default postsReducer;
