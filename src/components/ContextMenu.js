import React from 'react';
import styles from './ContextMenu.module.scss';

function ContextMenu({ xPos, yPos }) {
  return (
    <div
      className={styles.root}
      style={{ top: `${yPos}px`, left: `calc(${xPos}px - 20rem)` }}
    >
      <h1>Menu</h1>
    </div>
  );
}

export default ContextMenu;
