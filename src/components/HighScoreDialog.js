import React from 'react';
import Button from './Button';
import styles from './HighScoreDialog.module.scss';

function HighScoreDialog() {
  return (
    <div className={styles.root}>
      <h1>High Scores</h1>
      <Button>Submit</Button>
    </div>
  );
}

export default HighScoreDialog;
