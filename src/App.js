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
  const [timer, start, stop, reset] = useTimer(0);
  // state for opening Modal
  const [modalOpen, toggleModalOpen] = useToggle(true);
  // state for showing Carousel or HighScores
  const [stageModal, setStageModal] = useState('start');

  const handleStart = (image) => {
    setGameImage(image);
    toggleModalOpen();
    start();
  };

  const handleWin = () => {
    if (!modalOpen) {
      console.log('YOU WIN');
      stop();
      setStageModal('highscore');
      toggleModalOpen();
    }
  };

  const handleRestart = (e) => {
    // reset image found states
    setGameImage(seedImageList[0]);
    // resets timer to 0
    reset();
    setStageModal('start');
    if (!modalOpen) toggleModalOpen();
    console.log('RESTARTED');
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
      <Navbar
        list={gameImage.itemList}
        timer={timer}
        handleRestart={handleRestart}
      />
      <GameImage
        list={gameImage.itemList}
        imageUrl={gameImage.imageUrl}
        imageName={gameImage.imageName}
        imageAuthor={gameImage.imageAuthor}
        toggleFound={toggleFound}
        handleWin={handleWin}
      />
      {/* modal for starting game/timer */}
      {modalOpen && (
        <Modal>
          {stageModal === 'highscore' ? (
            <HighScoreDialog
              imageId={gameImage.id}
              timer={timer}
              handleRestart={handleRestart}
            />
          ) : (
            <Carousel imageList={seedImageList} handleStart={handleStart} />
          )}
        </Modal>
      )}
    </div>
  );
}

export default App;
