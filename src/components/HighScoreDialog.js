import React from 'react';
import { firestore } from '../firebase/config';
import useFirestore from '../hooks/useFirestore';
import useToggle from '../hooks/useToggle';
import useInput from '../hooks/useInput';
import Button from './Button';
import { formatTime } from '../utils/index';
import styles from './HighScoreDialog.module.scss';

function HighScoreDialog({ imageId, timer, handleRestart }) {
  const [showForm, toggleShowForm] = useToggle(true);
  const [name, handleChange] = useInput('');
  const [scores] = useFirestore(`${imageId}-scores`);
  const scoresRef = firestore.collection(`${imageId}-scores`);

  const addScore = async (e) => {
    e.preventDefault();
    // add to Firestore collection
    await scoresRef.add({
      name,
      time: timer,
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
      ) : (
        <div>
          <h1>{name} Time:</h1>
          <h2>{formatTime(timer)}</h2>
          <button onClick={handleRestart}>Restart</button>
        </div>
      )}
    </div>
  );
}

export default HighScoreDialog;
