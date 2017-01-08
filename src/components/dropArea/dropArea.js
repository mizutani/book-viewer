import React, { Component, PropTypes } from 'react';
import Dropzone from 'react-dropzone';
import styles from './dropArea.css';

class dropArea extends Component {
  render() {
    const { actions } = this.props;

    return (
      <div>
        <Dropzone onDrop={ (files) => actions.unzip(files) } className={styles.dropZone}>
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
