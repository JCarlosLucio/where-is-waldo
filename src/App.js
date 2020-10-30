import React, { useState } from 'react';
import useTimer from './hooks/useTimer';
import Navbar from './components/Navbar';
import GameImage from './components/GameImage';
import seedItemList from './seedItemList';
import styles from './App.module.scss';

function App() {
  // list of items to find
  const [list, setList] = useState(seedItemList);
  // timer for how long it takes to find items
  const [timer, start, stop] = useTimer(0);

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
      <Navbar list={list} timer={timer} />
      {/* where is waldo type image goes here */}
      <GameImage toggleFound={toggleFound} />
    </div>
  );
}

export default App;
