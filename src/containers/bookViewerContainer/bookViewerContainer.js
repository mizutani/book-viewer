import React, { Component, PropTypes } from 'react';
import Screen from 'components/screen/screen';
import RaisedButton from 'material-ui/RaisedButton';

const src = '/img/sample.jpg';

class BookViewerContainer extends Component {
  render() {
    const { viewer, actions } = this.props;

    return (
      <div>
        <Screen path={src} actions={actions} currentNum={viewer.currentPageNum} />
        <RaisedButton onClick={() => actions.prevButtonClick()} >PREV</RaisedButton>
        <span>{viewer.currentPageNum}</span>
        <RaisedButton onClick={() => actions.nextButtonClick()} >NEXT</RaisedButton>
      </div>
    );
  }
}

BookViewerContainer.propTypes = {
  viewer: PropTypes.object,
  actions: PropTypes.object,
};

export default BookViewerContainer;
