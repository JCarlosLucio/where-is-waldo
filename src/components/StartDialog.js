import React from 'react';
import Logo from './Logo';
import FindList from './FindList';
import styles from './StartDialog.module.scss';

function StartDialog({ list, handleStart }) {
  return (
    <div className={styles.root}>
      <Logo big primary="black" secondary="red" />
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
