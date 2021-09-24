import {ContentType} from '../../../types/user-actions';

export interface ContentsState {
  searchedContents: [] | null;
  searchedContentsPreview: [] | null;
  isLoading: boolean;
  error: boolean | null;
  contentType: ContentType;
  contentColor: string;
}
