import React from 'react';
import styles from './Snackbar.module.scss';

function Snackbar({ children, bg }) {
  return (
    <div style={{ backgroundColor: bg }} className={styles.root}>
      {children}
    </div>
  );
}

export default Snackbar;
