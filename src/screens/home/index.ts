import Home from './Home';
import * as postsActions from '../../store/modules/posts/posts.action';
import * as postsSelector from '../../store/modules/posts/posts.selector';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';

const mapStateToProps = (state: any) => ({
  userPosts: postsSelector.retrieveUserPosts(state),
  isLoading: postsSelector.retrievePostsLoader(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getUserPosts: () => {
    dispatch(postsActions.getUserPosts() as any);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
