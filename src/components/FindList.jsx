import PropTypes from 'prop-types';
import FindItem from './FindItem';
import styles from './FindList.module.scss';

function FindList({ difficulty, items }) {
  return (
    <div className={styles.root}>
      <h3 className={styles[difficulty]}>{difficulty}</h3>
      {items.map((item) => (
        <FindItem {...item} key={item.id} />
      ))}
    </div>
  );
}

FindList.propTypes = {
  difficulty: PropTypes.string,
  items: PropTypes.array,
};

export default FindList;
