import MainHeader from './MainHeader';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {setContentType} from '../../../store/modules/posts/posts.action';
import {ContentType} from '../../../types/user-actions';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setContentType: (payload: ContentType) => {
    dispatch(setContentType(payload) as any);
  },
});

export default connect(null, mapDispatchToProps)(MainHeader);
