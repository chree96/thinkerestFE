import {connect} from 'react-redux';
import ContentDetail from './ContentDetail';
import * as contentsSelector from '../../store/modules/contents/contents.selector';
import * as postsSelector from '../../store/modules/posts/posts.selector';

const mapStateToProps = (state: any) => ({
  contentColor: contentsSelector.getContentColor(state),
  contentDetail: contentsSelector.getContentDetail(state),
  isLoading: postsSelector.retrievePostsLoader(state),
});

export default connect(mapStateToProps, null)(ContentDetail);
