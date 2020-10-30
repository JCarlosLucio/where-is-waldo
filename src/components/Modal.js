import React from 'react';
import styles from './Modal.module.scss';

function Modal({ children }) {
  return <div className={styles.root}>{children}</div>;
}

export default Modal;
