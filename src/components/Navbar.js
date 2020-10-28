import React from 'react';
import DropdownMenu from './DropdownMenu';
import styles from './Navbar.module.scss';

function Navbar({ list }) {
  const numToFind = list.filter((item) => !item.found).length;

  return (
    <nav className={styles.root}>
      <ul className={styles.nav}>
        <li className={styles.title}>Where is Waldo?</li>
        <li className={styles.timer}>00:00:00</li>
        <li className={styles.dropdown}>
          <button className={styles['dropdown-btn']}>{numToFind}</button>
          <DropdownMenu />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
