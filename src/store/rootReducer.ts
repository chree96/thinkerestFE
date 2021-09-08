import {Reducer} from 'redux';
import {
  reducer as postsReducer,
  STATE_KEY as POSTS_STATE_KEY,
} from './modules/posts';
import {
  reducer as navigationReducer,
  STATE_KEY as NAVIGATION_STATE_KEY,
} from './modules/navigation';
const initialState: any = {
  [POSTS_STATE_KEY]: undefined,
};

const reducer: Reducer<any, any> = (state = initialState, action) => {
  state = {
    ...state,
    [POSTS_STATE_KEY]: postsReducer(state[POSTS_STATE_KEY], action),
    [NAVIGATION_STATE_KEY]: navigationReducer(
      state[NAVIGATION_STATE_KEY],
      action,
    ),
  };

  return state;
};

export default reducer;
