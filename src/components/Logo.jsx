import PropTypes from 'prop-types';
import styles from './Logo.module.scss';

function Logo({ big, primary, secondary }) {
  return (
    <h1 className={big ? styles.big : styles.root}>
      <span style={{ color: primary }}>find</span>
      <span style={{ color: secondary }}>Us</span>
    </h1>
  );
}

Logo.propTypes = {
  big: PropTypes.bool,
  primary: PropTypes.string,
  secondary: PropTypes.string,
};

export default Logo;
