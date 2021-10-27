import {connect} from 'react-redux';
import ContentDetail from './ContentDetail';
import * as contentsSelector from '../../store/modules/contents/contents.selector';

const mapStateToProps = (state: any) => ({
  contentColor: contentsSelector.retrieveContentColor(state),
});

export default connect(mapStateToProps, null)(ContentDetail);
