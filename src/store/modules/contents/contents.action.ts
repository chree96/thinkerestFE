import axios from 'axios';
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

export const setContentType = (contentType: ContentType) => {
  return (dispatch: any) => {
    dispatch({type: ContentsActionType.SET_CONTENT_TYPE, payload: contentType});
  };
};
