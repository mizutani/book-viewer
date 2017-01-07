import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import MiniMap from './minimap';
// import * as images from '/assets/files';
// import glob from 'glob';

// glob("/assets/files/*.png", function(err, files) {
//     if(err) {
//       console.log(err)
//     }
//     console.log(pattern)
//     console.log(files)
//   }
// );

const items = [
  {
    id: 1,
    file: '/img/sample/1.png',
  },
  {
    id: 2,
    file: '/img/sample/2.png',
  },
  {
    id: 3,
    file: '/img/sample/3.png',
  },
  {
    id: 4,
    file: '/img/sample/4.png',
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
