import {STATE_KEY} from './navigation.const';
import {NavigationState} from './navigation.types';

const mainSelector = (state: any) => state[STATE_KEY] as NavigationState;

export const retrieveIsHiddenHeader = (state: any) =>
  mainSelector(state).isHiddenHeader;
