import React from 'react';
import Button from './Button';
import styles from './HighScoreDialog.module.scss';

function HighScoreDialog() {
  return (
    <div className={styles.root}>
      <div className={styles.highscores}>
        <h1>High Scores</h1>
        <ol>
          <li>Name 00:02:10</li>
          <li>Name 00:02:11</li>
          <li>Name 00:02:12</li>
          <li>Name 00:02:13</li>
          <li>Name 00:02:14</li>
          <li>Name 00:02:15</li>
          <li>Name 00:02:16</li>
          <li>Name 00:02:17</li>
          <li>Name 00:02:18</li>
          <li>Name 00:02:19</li>
        </ol>
      </div>
      <form className={styles.form}>
        <h2>Add Your Score</h2>
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
