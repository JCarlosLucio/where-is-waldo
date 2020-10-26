import React from 'react';
import FindItem from './FindItem';
import styles from './FindList.module.scss';

function FindList({ difficulty, items }) {
  return (
    <div className={styles.root}>
      <h2>{difficulty}</h2>
      {items.map((item) => <FindItem {...item} key={item.id} />)}
    </div>
  );
}

export default FindList;
