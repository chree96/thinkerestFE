import {connect} from 'react-redux';
import ContentDetail from './ContentDetail';
import * as contentsSelector from '../../store/modules/contents/contents.selector';
import * as postsSelector from '../../store/modules/posts/posts.selector';
import {Dispatch} from 'redux';
import {retrieveContentReviews} from '../../store/modules/contents';

const mapStateToProps = (state: any) => ({
  contentColor: contentsSelector.getContentColor(state),
  contentDetail: contentsSelector.getContentDetail(state),
  friendsContentReviews: contentsSelector.getFriendsContentReviews(state),
  peopleContentReviews: contentsSelector.getPeopleContentReviews(state),
  isLoading: postsSelector.retrievePostsLoader(state),
  isLoadingReviews: contentsSelector.getReviewsLoader(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  retrieveContentReviews: (payload: string) => {
    dispatch(retrieveContentReviews(payload) as any);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentDetail);
