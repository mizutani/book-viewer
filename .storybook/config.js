import React from 'react';
import { configure, addDecorator } from '@kadira/storybook';
import MyLayout from './MyLayout';

const req = require.context('../src', true, /.stories.js$/);

const LayoutDecorator = (story) => (
  <MyLayout>
    {story()}
  </MyLayout>
)

function loadStories() {
  addDecorator(LayoutDecorator);
  req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);
