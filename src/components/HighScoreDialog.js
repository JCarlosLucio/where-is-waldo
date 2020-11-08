import React from 'react';
import useInput from '../hooks/useInput';
import Button from './Button';
import { formatTime } from '../utils/index';
import styles from './HighScoreDialog.module.scss';

function HighScoreDialog({ timer }) {
  const [name, handleChange] = useInput('');

  return (
    <div className={styles.root}>
      <div className={styles.highscores}>
        <h1>High Scores</h1>
        <ol className={styles.scores}>
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
        <h3>Your Time: {formatTime(timer)}</h3>
        <label htmlFor="name">Name</label>
        <input
          className={styles.name}
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
          maxLength="3"
          placeholder="AAA"
          autoFocus
          required
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default HighScoreDialog;
