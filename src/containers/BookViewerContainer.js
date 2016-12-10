import React, { Component, PropTypes } from 'react';
import Screen from '../components/screen';

const src = '/img/sample.jpg';

class BookViewerContainer extends Component {
  render() {
    const { viewer, actions } = this.props

    return (
      <div>
        <Screen path={src} />
        <button onClick={() => actions.prevButtonClick()} >PREV</button>
        <span>{viewer.currentPageNum}</span>
        <button onClick={() => actions.nextButtonClick()} >NEXT</button>
      </div>
    );
  }
}

BookViewerContainer.propTypes = {
  viewer: PropTypes.object,
  path: PropTypes.string,
  actions: PropTypes.object,
};

export default BookViewerContainer
