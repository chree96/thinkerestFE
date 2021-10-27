import {STATE_KEY} from './contents.const';
import {ContentsState} from './contents.types';

const mainSelector = (state: any) => state[STATE_KEY] as ContentsState;

export const getContentsLoader = (state: any) => mainSelector(state).isLoading;
export const getSearchedContentsPreview = (state: any) =>
  mainSelector(state).searchedContentsPreview;
export const getSearchedContents = (state: any) => {
  const contentType = getContentType(state);
  return mainSelector(state).searchSectionContents[contentType];
};
export const getContentType = (state: any) => mainSelector(state).contentType;
export const getContentColor = (state: any) => mainSelector(state).contentColor;
export const getContentDetail = (state: any) =>
  mainSelector(state).contentDetail;
