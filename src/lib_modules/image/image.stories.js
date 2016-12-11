import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Image from './image';

const src = '/img/sample.jpg';

storiesOf('Image', module)
  .add('view image and alt', () => (
    <Image alt={'h'} src={src} />
  ))
  .add('view no image', () => (
    <Image alt={'h'} />
  ))
  .add('not alt text', () => (
    <Image src={src} />
  ));
