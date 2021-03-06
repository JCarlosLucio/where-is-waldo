import React, { useEffect } from 'react';
import styles from './ContextMenu.module.scss';

function ContextMenu({ list, xPos, yPos, handleMenuClick, handleWin }) {
  const notFound = list.filter((item) => !item.found).map((item) => (
    <li
      key={item.id}
      className={styles.item}
      onClick={(e) => {
        e.stopPropagation();
        handleMenuClick(item.name, item.id, xPos, yPos);
      }}
    >
      {item.name}
    </li>
  ));

  useEffect(
    () => {
      const win = list.every((item) => item.found);
      if (win) {
        handleWin();
      }
    },
    [list, handleWin]
  );

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
