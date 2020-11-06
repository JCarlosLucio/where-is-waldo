import React from 'react';
import styles from './ContextMenu.module.scss';

function ContextMenu({ list, xPos, yPos, handleMenuClick }) {
  const notFound = list.filter((item) => !item.found).map((item) => (
    <li
      key={item.id}
      onClick={(e) => {
        e.stopPropagation();
        handleMenuClick(item.name, item.id, item.relX0, item.relY0, xPos, yPos);
      }}
      className={styles.item}
    >
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
