import {NavigationActionType} from './navigation.const';

export const setHiddenHeader = (isHiddenHeader: any) => {
  return (dispatch: any) => {
    dispatch({
      type: NavigationActionType.SET_HIDDEN_HEADER,
      payload: isHiddenHeader,
    });
  };
};
