import React from 'react';
import styles from './ContextMenu.module.scss';

function ContextMenu({ list, xPos, yPos }) {
  const notFound = list.filter((item) => !item.found).map((item) => (
    <li key={item.id} className={styles.item}>
      {item.name}
    </li>
  ));

  return (
    <div
      className={styles.root}
      style={{ top: `calc(${yPos}px - 3.75rem)`, left: `${xPos}px` }}
    >
      <ul className={styles.list}>{notFound}</ul>
    </div>
  );
}

export default ContextMenu;
