import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BookViewer from 'components/bookViewer';
import MiniMap from 'components/minimap';
import DropArea from 'components/dropArea';
import * as actions from 'actions';

const App = (props) => {
  return (
    <div>
      <MiniMap />
      <BookViewer />
      <button
        onClick={() => {props.actions.onChangeMiniMap(!props.open)} }>
        minimap
      </button>
      <DropArea />
    </div>
  );
}

App.propTypes = {
  actions: PropTypes.object,
  open: PropTypes.bool,
  items: PropTypes.array
}

const mapStateToProps = state => ({
  open: state.viewer.open,
});

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatch)(App);
