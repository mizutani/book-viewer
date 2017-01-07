import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Image from './image';

const src = '/img/sample/1.png';

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
