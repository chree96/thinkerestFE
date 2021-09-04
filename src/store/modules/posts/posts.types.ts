import {ContentType} from '../../../types/user-actions';

export interface PostsState {
  posts: [] | null;
  isLoading: boolean;
  error: boolean | null;
  contentType: ContentType;
  contentColor: string;
}
