import React from 'react';
import styles from './MadeBy.module.scss';

function MadeBy({ position, text, author, link }) {
  return (
    <div className={`${styles.root} ${styles[position]}`}>
      {text}{' '}
      <a className={styles.author} href={link}>
        {author}
      </a>
    </div>
  );
}

export default MadeBy;
