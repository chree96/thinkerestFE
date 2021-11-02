import axios from 'axios';
import {getContentType} from '.';
import {HttpAddress} from '../../../services/http/HttpService';
import {ContentType} from '../../../types/user-actions';
import {ContentsActionType} from './contents.const';

export const searchContent = (text: string) => {
  const prova = [
    {text: 'prova'},
    {text: 'prova'},
    {text: 'prova'},
    {text: 'prova'},
    {text: 'prova'},
    {text: 'prova'},
    {text: 'prova'},
    {text: 'prova'},
    {text: 'prova'},
    {text: 'prova'},
    {text: 'prova'},
    {text: 'prova'},
    {text: 'prova'},
  ];
  return (dispatch: any) => {
    if (text.length > 2) {
      dispatch({type: ContentsActionType.SEARCH_CONTENT, payload: text});
      dispatch({
        type: ContentsActionType.STORE_SEARCHED_CONTENT_PREVIEW,
        payload: prova,
      });
    } else {
      dispatch({
        type: ContentsActionType.STORE_SEARCHED_CONTENT_PREVIEW,
        payload: [],
      });
    }
  };
};

export const retrieveSearchSectionContents = () => {
  return (dispatch: any, getState: any) => {
    dispatch({type: ContentsActionType.RETRIEVE_SEARCH_SECTION_CONTENT});
    const state = getState();
    const contentType = getContentType(state);

    axios
      .get(HttpAddress + 'search-section-contents', {
        params: {contentType},
      })
      .then(response => {
        const results = response?.data?.results;
        dispatch({
          type: ContentsActionType.STORE_SEARCH_SECTION_CONTENT,
          payload: {contentType, results},
        });
      })
      .catch(error => {
        dispatch({
          type: ContentsActionType.RETRIEVE_SEARCH_CONTENT_FAILURE,
          payload: error,
        });
      });
  };
};

export const setContentType = (contentType: ContentType) => {
  return (dispatch: any) => {
    dispatch({type: ContentsActionType.SET_CONTENT_TYPE, payload: contentType});
  };
};

export const retrieveContentDetail = (id: string) => {
  return (dispatch: any) => {
    dispatch({type: ContentsActionType.RETRIEVE_CONTENT_DETAIL});

    axios
      .get(HttpAddress + 'content-details', {
        params: {id},
      })
      .then(response => {
        const results = response?.data?.results;
        dispatch({
          type: ContentsActionType.STORE_CONTENT_DETAIL,
          payload: results,
        });
      })
      .catch(error => {
        dispatch({
          type: ContentsActionType.RETRIEVE_SEARCH_CONTENT_FAILURE,
          payload: error,
        });
      });
  };
};
