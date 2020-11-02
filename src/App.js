import React, { useState } from 'react';
import useTimer from './hooks/useTimer';
import useToggle from './hooks/useToggle';
import Navbar from './components/Navbar';
import GameImage from './components/GameImage';
import Modal from './components/Modal';
import Carousel from './components/Carousel';
import seedImageList from './seedImageList';
import styles from './App.module.scss';

function App() {
  // image for game w/ list of items to find
  const [gameImage, setGameImage] = useState(seedImageList[0]);
  // timer for how long it takes to find items
  const [timer, start, stop] = useTimer(0);
  // state for opening Modal
  const [modalOpen, toggleModalOpen] = useToggle(true);

  const handleStart = (image) => {
    setGameImage(image);
    toggleModalOpen();
    start();
  };

  return (
    <div className={styles.root}>
      <Navbar list={gameImage.itemList} timer={timer} />
      <GameImage
        imageUrl={gameImage.imageUrl}
        imageName={gameImage.imageName}
      />
      {/* modal for starting game/timer */}
      {modalOpen && (
        <Modal>
          <Carousel imageList={seedImageList} handleStart={handleStart} />
        </Modal>
      )}
    </div>
  );
}

export default App;
