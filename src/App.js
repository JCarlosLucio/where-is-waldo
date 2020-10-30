import React, { useState } from 'react';
import useTimer from './hooks/useTimer';
import useToggle from './hooks/useToggle';
import Navbar from './components/Navbar';
import GameImage from './components/GameImage';
import Modal from './components/Modal';
import StartDialog from './components/StartDialog';
import seedItemList from './seedItemList';
import styles from './App.module.scss';

function App() {
  // list of items to find
  const [list, setList] = useState(seedItemList);
  // timer for how long it takes to find items
  const [timer, start, stop] = useTimer(0);
  // state for opening Modal
  const [modalOpen, toggleModalOpen] = useToggle(true);

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
      <GameImage toggleFound={toggleFound} />
      {/* modal for starting game/timer */}
      {modalOpen && (
        <Modal>
          <StartDialog />
        </Modal>
      )}
    </div>
  );
}

export default App;
