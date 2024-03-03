import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { addDoc, collection } from 'firebase/firestore';
import { firestore, timestamp } from '../firebase/config';
import useFirestore from '../hooks/useFirestore';
import useInput from '../hooks/useInput';
import Button from './Button';
import { formatTime } from '../utils/index';
import styles from './HighScoreDialog.module.scss';

function HighScoreDialog({ imageId, time, handleRestart }) {
  const [showForm, setShowForm] = useState(false);
  const [name, handleChange] = useInput('');
  const [hasAddedHighScore, setHasAddedHighScore] = useState(false);
  const [scores] = useFirestore(`${imageId}-scores`);
  const scoresRef = collection(firestore, `${imageId}-scores`);
  const timeElapsed = (time.end - time.start) / 1000;

  // check if isHighScore to showForm for adding to firestore
  useEffect(() => {
    if (scores !== null && !hasAddedHighScore) {
      const maxScore = Math.max(...scores.map((score) => score.time));
      const isHighScore = scores.length < 10 ? true : timeElapsed < maxScore;
      if (isHighScore) {
        setShowForm(true);
      }
    }
  }, [scores, timeElapsed, hasAddedHighScore, setShowForm]);

  const addScore = async (e) => {
    try {
      e.preventDefault();
      // In seconds and miliseconds as decimals (ex. 17.248)
      // add to Firestore collection
      // Rules for collection:
      // Only accepts 3 props(name,time,createdAt) w/ the appropiate types
      await addDoc(scoresRef, {
        name,
        time: timeElapsed,
        createdAt: timestamp,
      });

      setHasAddedHighScore(true);
      // hide Form
      setShowForm(false);
    } catch (error) {
      console.error('A wild error appeared!', error);
    }
  };

  // use scores from firestore
  const scoresList =
    scores !== null &&
    scores.map((score) => (
      <li key={score.id}>
        {score.name.toUpperCase()} {formatTime(score.time)}
      </li>
    ));

  return (
    <div className={styles.root}>
      <div className={styles.highscores}>
        <h1>High Scores</h1>
        {scores !== null && scores.length < 1 ? (
          <span>No highscores yet!</span>
        ) : (
          <ol className={styles.scores}>{scoresList}</ol>
        )}
      </div>
      {showForm ? (
        <form className={styles.form} onSubmit={addScore}>
          <h2>Add Your Score</h2>

          <h4>Time</h4>
          <h3>{formatTime(timeElapsed)}</h3>

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

HighScoreDialog.propTypes = {
  imageId: PropTypes.string,
  time: PropTypes.object,
  handleRestart: PropTypes.func,
};

export default HighScoreDialog;
