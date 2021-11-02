import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import Search from './Search';
import * as navigationActions from '../../store/modules/navigation/navigation.action';
import * as contentsSelector from '../../store/modules/contents/contents.selector';
import * as contentsAction from '../../store/modules/contents/contents.action';

const mapStateToProps = (state: any) => ({
  searchedContentPreview: contentsSelector.getSearchedContentsPreview(state),
  isLoading: contentsSelector.getContentsLoader(state),
  contentColor: contentsSelector.getContentColor(state),
  contentType: contentsSelector.getContentType(state),
  searchSectionContent: contentsSelector.getSearchedContents(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setHiddenHeader: (payload: any) => {
    dispatch(navigationActions.setHiddenHeader(payload) as any);
  },
  retrieveSearchSectionContents: () => {
    dispatch(contentsAction.retrieveSearchSectionContents() as any);
  },
  retrieveContentDetail: (payload: string) => {
    dispatch(contentsAction.retrieveContentDetail(payload) as any);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
