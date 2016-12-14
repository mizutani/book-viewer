import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import MiniMap from './minimap';

const items = [
  {
    id: 1,
    file: '/img/sample.jpg',
  },
  {
    id: 2,
    file: '/img/sample.jpg',
  },
  {
    id: 3,
    file: '/img/sample.jpg',
  },
  {
    id: 4,
    file: '/img/sample.jpg',
  },
];

storiesOf('MiniMap', module)
  .add('open', () => (
    getScreen({minimap: {open: true, items: items}})
  )).add('close', () => (
    getScreen({minimap: {open: false, items: items}})
  )).add('item empty', () => (
    getScreen({minimap: {open: true, items: []}})
  ));

const getScreen = props => {
  const actions = {
    onChangeCurrent: action('onChangeCurrent'),
  };


  return (
    <MiniMap actions={actions} { ...props } />
  );
};
