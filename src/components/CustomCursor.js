import React from 'react';
import styles from './CustomCursor.module.scss';

function CustomCursor({ xPos, yPos }) {
  return (
    <div
      className={styles.root}
      style={{ top: `calc(${yPos}px - 3.75rem)`, left: `${xPos}px` }}
    />
  );
}

export default CustomCursor;
