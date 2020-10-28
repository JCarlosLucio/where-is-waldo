import React from 'react';
import FindList from './FindList';
import styles from './Navbar.module.scss';

function Navbar({ list }) {
  return (
    <nav className={styles.root}>
      <ul>
        <li className={styles.title}>Where is Waldo?</li>
        <li>Timer</li>
        <li>🚀</li>
      </ul>

      {/* Move to Dropdown menu */}
      {/* <FindList
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
      /> */}
    </nav>
  );
}

export default Navbar;
