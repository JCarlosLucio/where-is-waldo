import PropTypes from 'prop-types';
import styles from './Modal.module.scss';

function Modal({ children }) {
  return <div className={styles.root}>{children}</div>;
}

Modal.propTypes = {
  children: PropTypes.node,
};

export default Modal;
