import {NavigationActionType} from './navigation.const';
import {NavigationState} from './navigation.types';

const initialState: NavigationState = {
  isHiddenHeader: false,
};

const navigationReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case NavigationActionType.SET_HIDDEN_HEADER:
      return Object.assign({}, state, {isHiddenHeader: action.payload});
    default:
      return state;
  }
};

export default navigationReducer;
