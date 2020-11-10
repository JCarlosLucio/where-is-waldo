import React from 'react';
import useFirestore from '../hooks/useFirestore';
import useInput from '../hooks/useInput';
import Button from './Button';
import { formatTime } from '../utils/index';
import styles from './HighScoreDialog.module.scss';

function HighScoreDialog({ timer }) {
  const [name, handleChange] = useInput('');
  const [scores] = useFirestore('scores');

  // use scores from firestore
  const scoresList = scores.map((score) => (
    <li key={score.id}>
      {score.name.toUpperCase()} {formatTime(score.time)}
    </li>
  ));

  return (
    <div className={styles.root}>
      <div className={styles.highscores}>
        <h1>High Scores</h1>

        <ol className={styles.scores}>{scoresList}</ol>
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
