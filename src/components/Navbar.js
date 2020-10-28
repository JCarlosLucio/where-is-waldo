import React from 'react';
import FindList from './FindList';
import styles from './Navbar.module.scss';

function Sidebar({ list }) {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Where is Waldo?</h1>

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
    </div>
  );
}

export default Sidebar;
