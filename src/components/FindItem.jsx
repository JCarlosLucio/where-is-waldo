import PropTypes from 'prop-types';
import styles from './FindItem.module.scss';

function FindItem({ name, franchise, image, found }) {
  return (
    <div className={`${styles.root} ${found && styles.found}`}>
      <img className={styles['item-image']} src={image} alt={name} />
      <div>
        <h3>{name}</h3>
        <h5>{franchise}</h5>
      </div>
    </div>
  );
}

FindItem.propTypes = {
  name: PropTypes.string,
  franchise: PropTypes.string,
  image: PropTypes.string,
  found: PropTypes.bool,
};

export default FindItem;
