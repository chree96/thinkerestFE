import SearchHeader from './SearchHeader';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {setContentType} from '../../../store/modules/contents/contents.action';
import {ContentType} from '../../../types/user-actions';
import * as navigationSelector from '../../../store/modules/navigation/navigation.selector';
import * as contentsSelector from '../../../store/modules/contents/contents.selector';
import * as contentsActions from '../../../store/modules/contents/contents.action';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setContentType: (payload: ContentType) => {
    dispatch(setContentType(payload) as any);
  },
  searchContent: (payload: string) => {
    dispatch(contentsActions.searchContent(payload) as any);
  },
});
const mapStateToProps = (state: any) => ({
  isLoading: contentsSelector.getContentsLoader(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchHeader);
