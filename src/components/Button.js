import React from 'react';
import styles from './Button.module.scss';

function Button({ children, handleClick }) {
  return (
    <button className={styles.root} onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
