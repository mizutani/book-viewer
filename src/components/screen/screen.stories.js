import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Screen from './screen';

const src = '/img/sample.jpg';

storiesOf('Screen', module)
  .add('success', () => (
    <Screen path={src} />
  ));
