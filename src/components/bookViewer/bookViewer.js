import React, { Component, PropTypes } from 'react';
import Screen from 'components/screen/screen';
import RaisedButton from 'material-ui/RaisedButton';
import styles from './bookViewer.css';

const src = '/img/sample/1.png';

class bookViewer extends Component {
  render() {
    const { viewer, actions } = this.props;

    return (
      <div className={styles.bookViewer}>
        <Screen path={src} actions={actions} currentNum={viewer.currentPageNum} />
        <div className={styles.viewController}>
          <RaisedButton onClick={() => actions.prevButtonClick()} >PREV</RaisedButton>
          <span>{viewer.currentPageNum}</span>
          <RaisedButton onClick={() => actions.nextButtonClick()} >NEXT</RaisedButton>
        </div>
      </div>
    );
  }
}

bookViewer.propTypes = {
  viewer: PropTypes.object,
  actions: PropTypes.object,
};

export default bookViewer;
