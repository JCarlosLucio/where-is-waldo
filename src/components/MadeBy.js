import React from 'react';
import styles from './MadeBy.module.scss';

function MadeBy({ position, text, link, icon }) {
  return (
    <div className={`${styles.root} ${styles[position]}`}>
      {text}{' '}
      <a className={styles.icon} href={link}>
        {icon}
      </a>
    </div>
  );
}

export default MadeBy;
