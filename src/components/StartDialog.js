import React from 'react';
import FindList from './FindList';
import styles from './StartDialog.module.scss';

function StartDialog({ list, handleStart }) {
  return (
    <div className={styles.root}>
      <h1>findUS</h1>
      {/* Image preview (?) */}
      <FindList
        difficulty="easy"
        items={list.filter((item) => item.difficulty === 'easy')}
      />
      <FindList
        difficulty="medium"
        items={list.filter((item) => item.difficulty === 'medium')}
      />
      <FindList
        difficulty="hard"
        items={list.filter((item) => item.difficulty === 'hard')}
      />
      <button onClick={handleStart}>START</button>
    </div>
  );
}

export default StartDialog;
