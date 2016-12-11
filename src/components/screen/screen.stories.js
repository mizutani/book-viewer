import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Screen from './screen';

const src = '/img/sample.jpg';

storiesOf('Screen', module)
  .add('success', () => (
    getScreen(src)
  ));

const getScreen = src => {
  const actions = {
    onChangeCurrent: action('onChangeCurrent'),
  };

  return (
    <div>
      <Screen path={src} pageNum={2} actions={actions} />
    </div>
  );
};
