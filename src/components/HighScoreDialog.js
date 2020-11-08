import React from 'react';
import useInput from '../hooks/useInput';
import Button from './Button';
import { formatTime } from '../utils/index';
import styles from './HighScoreDialog.module.scss';

const seedScores = [
  {
    id: 'aaa-1',
    name: 'aaa',
    time: 1,
  },
  {
    id: 'aab-2',
    name: 'aab',
    time: 2,
  },
  {
    id: 'abb-3',
    name: 'abb',
    time: 3,
  },
];

function HighScoreDialog({ timer }) {
  const [name, handleChange] = useInput('');

  // using seedScores for testing
  const scores = seedScores.map((score) => (
    <li key={score.id}>
      {score.name.toUpperCase()} {formatTime(score.time)}
    </li>
  ));

  return (
    <div className={styles.root}>
      <div className={styles.highscores}>
        <h1>High Scores</h1>
        <ol className={styles.scores}>{scores}</ol>
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
