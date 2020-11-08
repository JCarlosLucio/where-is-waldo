import React from 'react';
import Button from './Button';
import styles from './HighScoreDialog.module.scss';

function HighScoreDialog() {
  return (
    <div className={styles.root}>
      <form>
        <label>
          Name
          <input type="text" name="name" placeholder="Your Name" autoFocus />
        </label>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default HighScoreDialog;
