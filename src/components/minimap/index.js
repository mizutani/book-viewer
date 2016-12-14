import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from 'actions';
import MiniMap from './minimap'

const mapStateToProps = state => ({
  minimap: state.viewer,
});

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatch)(MiniMap);
