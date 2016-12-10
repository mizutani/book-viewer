import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import BookViewerContainer from './BookViewerContainer';

storiesOf('BookViewerContainer', module)
  .add('render', () => {

    const state = {
      currentPageNum: 0,
    }

    return getBookViewerContainer(state);
  });

const getBookViewerContainer = viewer => {
  const actions = {
    nextButtonClick: action('nextButtonClick'),
    prevButtonClick: action('prevButtonClick')
  };

  return (
    <div>
      <BookViewerContainer viewer={viewer} actions={actions} />
    </div>
  );
}
