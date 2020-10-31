import React from 'react';
import useToggle from '../hooks/useToggle';
import DropdownMenu from './DropdownMenu';
import Logo from './Logo';
import { formatTime } from '../utils';
import styles from './Navbar.module.scss';

function Navbar({ list, timer }) {
  const [open, toggleOpen] = useToggle(false);

  const numToFind = list.filter((item) => !item.found).length;

  return (
    <nav className={styles.root}>
      <ul className={styles.nav}>
        <li>
          <Logo primary="white" secondary="red" />
        </li>
        <li className={styles.timer}>{formatTime(timer)}</li>
        <li className={styles.dropdown}>
          <button className={styles['dropdown-btn']} onClick={toggleOpen}>
            {numToFind}
          </button>
          {open && <DropdownMenu list={list} />}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
