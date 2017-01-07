import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import BookViewer from './bookViewer';

const images = [
  {
    id: 1,
    file: '/img/sample/1.png',
  },
  {
    id: 2,
    file: '/img/sample/2.png',
  }
];

storiesOf('BookViewer', module)
  .add('render', () => {
    const state = {
      currentPageNum: 1,
      items: images
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
