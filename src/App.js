import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import GameImage from './components/GameImage';
import seedItemList from './seedItemList';
import styles from './App.module.scss';

function App() {
  const [list, setList] = useState(seedItemList);

  const toggleFound = (id) => {
    const updatedItems = list.map((item) => {
      if (item.id === id) {
        return { ...item, found: true };
      }
      return item;
    });
    setList(updatedItems);
  };

  return (
    <div className={styles.root}>
      <Sidebar list={list} />
      {/* where is waldo type image goes here */}
      <GameImage toggleFound={toggleFound} />
    </div>
  );
}

export default App;
