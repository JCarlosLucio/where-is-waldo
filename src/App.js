import React, { useState, useEffect } from 'react';
import useTimer from './hooks/useTimer';
import useToggle from './hooks/useToggle';
import Navbar from './components/Navbar';
import GameImage from './components/GameImage';
import Modal from './components/Modal';
import Carousel from './components/Carousel';
import HighScoreDialog from './components/HighScoreDialog';
import seedImageList from './seedImageList';
import styles from './App.module.scss';

function App() {
  // image for game w/ list of items to find
  const [gameImage, setGameImage] = useState(seedImageList[0]);
  // timer for how long it takes to find items
  const [timer, start, stop] = useTimer(0);
  // state for opening Modal
  const [modalOpen, toggleModalOpen] = useToggle(true);
  // state for showing Carousel or HighScores
  const [stageModal, setStageModal] = useState('start');

  useEffect(
    () => {
      const win = gameImage.itemList.every((item) => item.found);
      if (win && modalOpen === false) {
        console.log('YOU WIN');
        console.log(timer);
        stop();
        setStageModal('highscore');
        toggleModalOpen();
      }
    },
    [gameImage, timer, stop, setStageModal, modalOpen, toggleModalOpen]
  );

  const handleStart = (image) => {
    setGameImage(image);
    toggleModalOpen();
    start();
  };

  const toggleFound = (itemId) => {
    // returns image Object w/ itemList w/updated item.found
    const updatedImage = {
      ...gameImage,
      itemList: gameImage.itemList.map((item) => {
        if (item.id === itemId) {
          return { ...item, found: true };
        } else {
          return item;
        }
      }),
    };
    setGameImage(updatedImage);
  };

  return (
    <div className={styles.root}>
      <Navbar list={gameImage.itemList} timer={timer} />
      <GameImage
        list={gameImage.itemList}
        imageUrl={gameImage.imageUrl}
        imageName={gameImage.imageName}
        toggleFound={toggleFound}
      />
      {/* modal for starting game/timer */}
      {modalOpen && (
        <Modal>
          {stageModal === 'highscore' ? (
            <HighScoreDialog imageId={gameImage.id} timer={timer} />
          ) : (
            <Carousel imageList={seedImageList} handleStart={handleStart} />
          )}
        </Modal>
      )}
    </div>
  );
}

export default App;
