import React, { PropTypes } from 'react';
import Slider from 'react-slick';
import { Card, CardMedia, CardTitle } from 'material-ui/Card';
import Image from 'lib_modules/index';
import styles from './screen.css';

const sliderSettings = (currentNum, actions) => ({
  dots: false,
  infinite: false,
  arrows: false,
  speed: 250,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: true,
  afterChange: index => {
    actions.onChangeCurrent(index);
  },

  slickGoTo: currentNum,
});

const createImage = images => {
  return images.map((image, index) => (
        <Image src={image.file} key={index} />
    ));
};

const Screen = ({ images, currentNum, actions }) => (
  <div className={styles.screen} >
    <Card className={styles.card} >
      <CardTitle title="画像タイトル" subtitle="画像サブタイトル" />
      <CardMedia>
        <Slider {...sliderSettings(currentNum, actions)} className={styles.slider}>
          {createImage(images)}
        </Slider>
      </CardMedia>
    </Card>
  </div>
);

Screen.propTypes = {
  images: PropTypes.array,
  actions: PropTypes.object,
  currentNum: PropTypes.number,
};

export default Screen;
