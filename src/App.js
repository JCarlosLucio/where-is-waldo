import React, { useState } from 'react';
import useTimer from './hooks/useTimer';
import useToggle from './hooks/useToggle';
import Navbar from './components/Navbar';
import GameImage from './components/GameImage';
import Modal from './components/Modal';
import StartDialog from './components/StartDialog';
import seedImageList from './seedImageList';
import styles from './App.module.scss';

const IMAGE_URL = 'https://i.imgur.com/N4wefbX.jpg';

function App() {
  // image for game w/ list of items to find
  const [gameImage, setGameImage] = useState(seedImageList[0]);
  // timer for how long it takes to find items
  const [timer, start, stop] = useTimer(0);
  // state for opening Modal
  const [modalOpen, toggleModalOpen] = useToggle(true);

  const handleStart = () => {
    toggleModalOpen();
    start();
  };

  // const toggleFound = (id) => {
  //   const updatedItems = list.map((item) => {
  //     if (item.id === id) {
  //       return { ...item, found: true };
  //     }
  //     return item;
  //   });
  //   setList(updatedItems);
  // };

  return (
    <div className={styles.root}>
      <Navbar list={gameImage.itemList} timer={timer} />
      <GameImage toggleFound={toggleFound} imageUrl={gameImage.imageUrl} />
      {/* modal for starting game/timer */}
      {modalOpen && (
        <Modal>
          <StartDialog
            list={gameImage.itemList}
            imageUrl={gameImage.imageUrl}
            handleStart={handleStart}
          />
        </Modal>
      )}
    </div>
  );
}

export default App;
