import React from 'react';
import styles from './FindItem.module.scss';

function FindItem({ name, franchise, image }) {
  return (
    <div className={styles.root}>
      <img className={styles['item-image']} src={image} alt={name} />
      {/* conditional style w/found prop */}
      <div>
        <h3>{name}</h3>
        <h5>{franchise}</h5>
      </div>
    </div>
  );
}

export default FindItem;
