import PropTypes from 'prop-types';
import FindList from './FindList';
import Button from './Button';
import styles from './StartDialog.module.scss';

function StartDialog({ list, imageName, imageAuthor, imageUrl, handleStart }) {
  return (
    <div className={styles.root}>
      <img className={styles.preview} src={imageUrl} alt="the loc nar" />
      <div className={styles.info}>
        <h2 className={styles.name}>{imageName}</h2>
        <p className={styles.author}>by {imageAuthor}</p>
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
        <Button handleClick={handleStart}>start</Button>
      </div>
    </div>
  );
}

StartDialog.propTypes = {
  list: PropTypes.array,
  imageName: PropTypes.string,
  imageAuthor: PropTypes.string,
  imageUrl: PropTypes.string,
  handleStart: PropTypes.func,
};

export default StartDialog;
