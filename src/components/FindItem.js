import React from 'react';
import styles from './FindItem.module.scss';

function FindItem({ name, franchise, image }) {
  return (
    <div className={styles.root}>
      {/* character image goes here */}
      {/* conditional style w/found prop */}
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <h5>{franchise}</h5>
    </div>
  );
}

export default FindItem;
