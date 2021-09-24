import {STATE_KEY} from './contents.const';
import {ContentsState} from './contents.types';

const mainSelector = (state: any) => state[STATE_KEY] as ContentsState;

export const retrieveContentsLoader = (state: any) =>
  mainSelector(state).isLoading;
export const retrieveSearchedContentsPreview = (state: any) =>
  mainSelector(state).searchedContentsPreview;
export const retrieveSearchedContents = (state: any) =>
  mainSelector(state).searchedContents;
export const retrieveContentType = (state: any) =>
  mainSelector(state).contentType;
export const retrieveContentColor = (state: any) =>
  mainSelector(state).contentColor;
