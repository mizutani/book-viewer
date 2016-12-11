import React, { PropTypes } from 'react';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';
import Image from 'lib_modules/index';
import styles from './screen.css';

const Screen = ({ path }) => (
  <div className={styles.screen}>
    <Card>
      <CardTitle title="画像タイトル" subtitle="画像サブタイトル" />
      <CardMedia>
        <Image src={path} />
      </CardMedia>
    </Card>
  </div>
);

Screen.propTypes = {
  path: PropTypes.string,
};

export default Screen;
