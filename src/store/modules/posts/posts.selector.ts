import {STATE_KEY} from './posts.const';
import {PostsState} from './posts.types';

const mainSelector = (state: any) => state[STATE_KEY] as PostsState;

export const retrieveUserPosts = (state: any) => mainSelector(state).posts;
export const retrievePostsLoader = (state: any) =>
  mainSelector(state).isLoading;
export const retrieveContentType = (state: any) =>
  mainSelector(state).contentType;
export const retrieveContentColor = (state: any) =>
  mainSelector(state).contentColor;
