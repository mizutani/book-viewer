import React, { PropTypes } from 'react';
import Image from './image';

const Screen = ({ path }) => (
  <div>
    <Image src={path} />
  </div>
);

Screen.propTypes = {
  path: PropTypes.string,
};

export default Screen;
