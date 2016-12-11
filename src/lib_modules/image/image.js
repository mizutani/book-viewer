import React, { PropTypes } from 'react';

const Image = (props) => {
  const {
    src,
    alt,
    ...otherProps
  } = props;

  return (
    <img src={src} alt={alt} {...otherProps} />
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default Image;
