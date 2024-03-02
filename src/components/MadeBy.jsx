import React from 'react';
import styles from './MadeBy.module.scss';

function MadeBy({ position, text, author, link }) {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className={`${styles.root} ${styles[position]}`}>
      {text}{' '}
      <a
        className={styles.author}
        href={link}
        onClick={() => openInNewTab(link)}
      >
        {author}
      </a>
    </div>
  );
}

export default MadeBy;
