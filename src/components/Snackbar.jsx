import PropTypes from 'prop-types';
import styles from './Snackbar.module.scss';

function Snackbar({ children, bg }) {
  return (
    <div style={{ backgroundColor: bg }} className={styles.root}>
      {children}
    </div>
  );
}

Snackbar.propTypes = {
  children: PropTypes.node,
  bg: PropTypes.string,
};

export default Snackbar;
