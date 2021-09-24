import Home from './Home';
import * as navigationActions from '../../store/modules/navigation/navigation.action';
import * as postsActions from '../../store/modules/posts/posts.action';
import * as postsSelector from '../../store/modules/posts/posts.selector';
import * as contentsSelector from '../../store/modules/contents/contents.selector';
import * as navigationSelector from '../../store/modules/navigation/navigation.selector';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';

const mapStateToProps = (state: any) => ({
  userPosts: postsSelector.retrieveUserPosts(state),
  contentColor: contentsSelector.retrieveContentColor(state),
  isLoading: postsSelector.retrievePostsLoader(state),
  isHiddenHeader: navigationSelector.retrieveIsHiddenHeader(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getHomePosts: () => {
    dispatch(postsActions.getHomePosts() as any);
  },
  setHiddenHeader: (payload: any) => {
    dispatch(navigationActions.setHiddenHeader(payload) as any);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
