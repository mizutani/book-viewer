import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Screen from './screen';

const src = '/img/sample/1.png';

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
      <Screen path={src} currentNum={2} actions={actions} />
    </div>
  );
};
