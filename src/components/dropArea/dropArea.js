import React, { Component, PropTypes } from 'react';
import Dropzone from 'react-dropzone';
import styles from './dropArea.css';

class dropArea extends Component {
  render() {
    const { actions } = this.props;

    return (
      <div className={styles.dropZone}>
        <Dropzone onDrop={ (files) => actions.onDropFiles(files) }>
          ファイルドロップエリア
        </Dropzone>
      </div>
    );
  }
}

dropArea.propTypes = {
  actions: PropTypes.object,
};

export default dropArea;
