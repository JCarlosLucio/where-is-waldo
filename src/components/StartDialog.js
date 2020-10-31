import React from 'react';
import styles from './StartDialog.module.scss';

function StartDialog() {
  return (
    <div className={styles.root}>
      <h1>findUS</h1>
      {/* Image preview (?) */}
      <p>List of Items to Find</p>
      <button>START</button>
    </div>
  );
}

export default StartDialog;
