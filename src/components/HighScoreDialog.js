import React from 'react';
import { firestore } from '../firebase/config';
import useFirestore from '../hooks/useFirestore';
import useToggle from '../hooks/useToggle';
import useInput from '../hooks/useInput';
import Button from './Button';
import { formatTime } from '../utils/index';
import styles from './HighScoreDialog.module.scss';

function HighScoreDialog({ imageId, time, handleRestart }) {
  const [showForm, toggleShowForm] = useToggle(true);
  const [name, handleChange] = useInput('');
  const [scores] = useFirestore(`${imageId}-scores`);
  const scoresRef = firestore.collection(`${imageId}-scores`);
  const timeElapsed = (time.end - time.start) / 1000;

  const addScore = async (e) => {
    e.preventDefault();
    // In seconds and miliseconds as decimals (ex. 17.248)
    // add to Firestore collection
    await scoresRef.add({
      name,
      time: timeElapsed,
    });
    // hide Form
    toggleShowForm();
  };

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
      {showForm ? (
        <form className={styles.form} onSubmit={addScore}>
          <h2>Add Your Score</h2>
          <h3>Your Time: {formatTime(timeElapsed)}</h3>
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
      ) : (
        <div className={styles.restart}>
          <h1>{name.toUpperCase()} Time</h1>
          <h2>{formatTime(timeElapsed)}</h2>
          <Button handleClick={handleRestart}>Restart</Button>
        </div>
      )}
    </div>
  );
}

export default HighScoreDialog;
