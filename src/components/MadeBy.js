import React from 'react';
import styles from './MadeBy.module.scss';

function MadeBy({ children }) {
  return <div className={styles.root}>{children}</div>;
}

export default MadeBy;
