import PropTypes from 'prop-types';
import FindList from './FindList';
import styles from './DropdownMenu.module.scss';

function DropdownMenu({ list }) {
  return (
    <div className={styles.root}>
      <FindList
        difficulty="easy"
        items={list.filter((item) => item.difficulty === 'easy')}
      />
      <FindList
        difficulty="medium"
        items={list.filter((item) => item.difficulty === 'medium')}
      />
      <FindList
        difficulty="hard"
        items={list.filter((item) => item.difficulty === 'hard')}
      />
    </div>
  );
}

DropdownMenu.propTypes = {
  list: PropTypes.array,
};

export default DropdownMenu;
