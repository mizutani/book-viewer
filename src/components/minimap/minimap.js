import React, { Component, PropTypes } from 'react';
import lodash from 'lodash/collection';
import Drawer from 'material-ui/Drawer';
import Image from 'lib_modules/index';
import styles from './index.css';

const createImages = (items, actions) => {
  return (
    lodash.map(items, (item) => (
        <Image src={item.file} className={styles.image} onClick={()=>(actions.onChangeCurrent(item.id))} />
    )
  )
);
};

class MiniMap extends Component {
  render() {
    const { minimap, actions } = this.props;

    return (
      <div>
        <Drawer open={minimap.open} className={styles.minimap}>
          <div>
            {createImages(minimap.items, actions)}
          </div>
        </Drawer>
      </div>
    );
  }
}

MiniMap.propTypes = {
  minimap: PropTypes.object,
  actions: PropTypes.object,
}

export default MiniMap;
