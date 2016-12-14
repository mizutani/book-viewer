import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BookViewerContainer from 'components/bookViewerContainer';
import MiniMap from 'components/minimap';
import * as actions from 'actions';

const App = (props) => {
  return (
    <div>
      <MiniMap />
      <BookViewerContainer />
      <button
        onClick={() => {props.actions.onChangeMiniMap(!props.open)} }>
        minimap
      </button>
    </div>
  );
}

App.propTypes = {
  actions: PropTypes.object,
  open: PropTypes.bool,
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
