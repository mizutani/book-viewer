import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import BookViewer from './bookViewer';

storiesOf('BookViewer', module)
  .add('render', () => {
    const state = {
      currentPageNum: 1,
    };

    return getBookViewer(state);
  });

const getBookViewer = viewer => {
  const actions = {
    nextButtonClick: action('nextButtonClick'),
    prevButtonClick: action('prevButtonClick'),
  };

  return (
    <div>
      <BookViewer viewer={viewer} actions={actions} />
    </div>
  );
};
