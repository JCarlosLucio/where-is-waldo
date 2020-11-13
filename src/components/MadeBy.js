import React from 'react';
import styles from './MadeBy.module.scss';

function MadeBy({ position, children }) {
  return <div className={`${styles.root} ${styles[position]}`}>{children}</div>;
}

export default MadeBy;
