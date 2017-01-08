import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import DropArea from './dropArea';

storiesOf('DropArea', module)
  .add('render', () => {
    return getDropArea();
  });

const getDropArea = () => {
  const actions = {
    onDropFiles: action('onDropFiles')
  };

  return (
    <div>
      <DropArea actions={actions} />
    </div>
  );
};
