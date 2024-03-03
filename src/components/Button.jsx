import PropTypes from 'prop-types';
import styles from './Button.module.scss';

function Button({ children, handleClick }) {
  return (
    <button className={styles.root} onClick={handleClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  handleClick: PropTypes.func,
};

export default Button;
