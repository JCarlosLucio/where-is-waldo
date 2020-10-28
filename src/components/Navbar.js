import React, { useState } from 'react';
import DropdownMenu from './DropdownMenu';
import styles from './Navbar.module.scss';

function Navbar({ list }) {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);

  const numToFind = list.filter((item) => !item.found).length;

  return (
    <nav className={styles.root}>
      <ul className={styles.nav}>
        <li className={styles.title}>Where is Waldo?</li>
        <li className={styles.timer}>00:00:00</li>
        <li className={styles.dropdown}>
          <button className={styles['dropdown-btn']} onClick={handleClick}>
            {numToFind}
          </button>
          {open && <DropdownMenu />}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
