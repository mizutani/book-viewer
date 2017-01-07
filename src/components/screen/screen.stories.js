import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Screen from './screen';

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

storiesOf('Screen', module)
  .add('success', () => (
    getScreen(images)
  ));

const getScreen = images => {
  const actions = {
    onChangeCurrent: action('onChangeCurrent'),
  };

  return (
    <div>
      <Screen images={images} currentNum={1} actions={actions} />
    </div>
  );
};
