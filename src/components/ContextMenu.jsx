import PropTypes from 'prop-types';
import styles from './ContextMenu.module.scss';

function ContextMenu({ list, xPos, yPos, handleMenuClick }) {
  const notFound = list
    .filter((item) => !item.found)
    .map((item) => (
      <li
        key={item.id}
        className={styles.item}
        onClick={(e) => {
          e.stopPropagation();
          handleMenuClick(item.name, item.id, xPos, yPos);
        }}
      >
        {item.name}
      </li>
    ));

  return (
    <div
      className={styles.root}
      style={{ top: `calc(${yPos}px - 3.75rem)`, left: `${xPos}px` }}
    >
      <ul className={styles.list}>{notFound}</ul>
    </div>
  );
}

ContextMenu.propTypes = {
  list: PropTypes.array,
  xPos: PropTypes.number,
  yPos: PropTypes.number,
  handleMenuClick: PropTypes.func,
};

export default ContextMenu;
