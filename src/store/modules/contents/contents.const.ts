export const STATE_KEY: 'contents_info' = 'contents_info';

export enum ContentsActionType {
  SEARCH_CONTENT = 'contents/SEARCH_CONTENT',
  STORE_SEARCHED_CONTENT_PREVIEW = 'contents/STORE_SEARCHED_CONTENT_PREVIEW',
  STORE_SEARCH_SECTION_CONTENT = 'contents/STORE_SEARCH_SECTION_CONTENT',
  RETRIEVE_SEARCH_CONTENT_FAILURE = 'contents/RETRIEVE_SEARCH_CONTENT_FAILURE',
  RETRIEVE_SEARCH_SECTION_CONTENT = 'contents/RETRIEVE_SEARCH_SECTION_CONTENT',
  SET_CONTENT_TYPE = 'contents/SET_CONTENT_TYPE',
  RETRIEVE_CONTENT_DETAIL = 'contents/RETRIEVE_CONTENT_DETAIL',
  STORE_CONTENT_DETAIL = 'contents/STORE_CONTENT_DETAIL',
  RETRIEVE_CONTENT_REVIEWS = 'contents/RETRIEVE_CONTENT_REVIEWS',
  STORE_CONTENT_REVIEWS = 'contents/STORE_CONTENT_REVIEWS',
}
