import React, { PropTypes } from 'react';
import Image from '../components/image';

const Screen = ({ path }) => (
  <div>
    <Image src={path} />
  </div>
);

Screen.propTypes = {
  path: PropTypes.String,
};

export default Screen;
