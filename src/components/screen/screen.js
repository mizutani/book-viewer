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

const Screen = ({ path, currentNum, actions }) => (
  <div className={styles.screen} >
    <Card className={styles.card} >
      <CardTitle title="画像タイトル" subtitle="画像サブタイトル" />
      <CardMedia>
        <Slider {...sliderSettings(currentNum, actions)} className={styles.slider}>
          <Image src={path} />
          <Image src={path} />
          <Image src={path} />
          <Image src={path} />
        </Slider>
      </CardMedia>
    </Card>
  </div>
);

Screen.propTypes = {
  path: PropTypes.string,
  actions: PropTypes.object,
  currentNum: PropTypes.number,
};

export default Screen;
