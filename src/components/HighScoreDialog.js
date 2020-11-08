import React from 'react';
import Button from './Button';
import styles from './HighScoreDialog.module.scss';

function HighScoreDialog() {
  return (
    <div className={styles.root}>
      <div>
        <h1>High Scores</h1>
        <ul>
          <li>
            <p>1 Name 00:02:10</p>
          </li>
          <li>
            <p>2 Name 00:02:11</p>
          </li>
          <li>
            <p>3 Name 00:02:12</p>
          </li>
        </ul>
      </div>
      <form>
        <h3>Your Time: 00:03:21</h3>
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
