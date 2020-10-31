import React from 'react';
import Logo from './Logo';
import FindList from './FindList';
import styles from './StartDialog.module.scss';

function StartDialog({ list, imageUrl, handleStart }) {
  return (
    <div className={styles.root}>
      <img className={styles.preview} src={imageUrl} alt="the loc nar" />
      <div className={styles.info}>
        <Logo big primary="black" secondary="red" />
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
    </div>
  );
}

export default StartDialog;
