import PropTypes from 'prop-types';
import useToggle from '../hooks/useToggle';
import DropdownMenu from './DropdownMenu';
import Logo from './Logo';
import Timer from './Timer';
import styles from './Navbar.module.scss';

function Navbar({ list, isGameOver, handleRestart }) {
  const [open, toggleOpen] = useToggle(false);

  const numToFind = list.filter((item) => !item.found).length;

  return (
    <nav className={styles.root}>
      <ul className={styles.nav}>
        <li className={styles.logo} onClick={handleRestart}>
          <Logo primary="white" secondary="red" />
        </li>
        <li className={styles.timer}>
          <Timer isGameOver={isGameOver} />
        </li>
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

Navbar.propTypes = {
  list: PropTypes.array,
  isGameOver: PropTypes.bool,
  handleRestart: PropTypes.func,
};

export default Navbar;
