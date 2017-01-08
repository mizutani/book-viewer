import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BookViewer from 'components/bookViewer';
import MiniMap from 'components/minimap';
import DropArea from 'components/dropArea';
import * as actions from 'actions';
import styles from './app.css';

const App = (props) => {
  return (
    <div className={styles.app} >
      <MiniMap />
      <div className={styles.main}>
        <BookViewer />
      </div>
      <div className={styles.fotter}>
        <button
          className={styles.imageList}
          onClick={() => {props.actions.onChangeMiniMap(!props.open)} }>
          画像一覧
        </button>
        <div className={styles.dropArea}>
          <DropArea />
        </div>
      </div>
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
