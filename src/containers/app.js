import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import { BookViewerContainer } from './bookViewer/bookViewer';

const mapState = state => ({
  viewer: state.viewer,
});

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapState, mapDispatch)(BookViewerContainer);
