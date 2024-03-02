import React, { useState, useRef } from 'react';
import { firestore } from '../firebase/config';
import useToggle from '../hooks/useToggle';
import useSnackbar from '../hooks/useSnackbar';
import ContextMenu from './ContextMenu';
import Snackbar from './Snackbar';
import MadeBy from './MadeBy';
import styles from './GameImage.module.scss';

function GameImage({
  list,
  imageUrl,
  imageName,
  imageAuthor,
  toggleFound,
  handleWin,
}) {
  const [menuOpen, toggleMenuOpen] = useToggle(false);
  const [menuCoords, setMenuCoords] = useState({ x: 0, y: 0 });
  const [snackbar, openSnackbar, setSnackbar, toggleSnackbar] = useSnackbar(
    { text: '', bg: 'red' },
    3000
  );

  const imgRef = useRef();

  const handleImageClick = (event) => {
    event.preventDefault();
    const { pageX: x, pageY: y } = event;
    setMenuCoords({ x, y });
    toggleMenuOpen();
  };

  const handleMenuClick = async (itemName, itemId, x, y) => {
    try {
      // x / y coords are taken from complete page (take navbar into account)
      // width / height reference GameImage (don't take navbar into account)
      const width = imgRef.current.offsetWidth;
      const height = imgRef.current.offsetHeight;

      // use relative form so it can work on any screen size
      const relX = x / width;
      const relY = (y - 60) / height; // 60 is height of navbar

      // Get relative Coords from Firestore
      const coordsRef = firestore.collection('coords').doc(itemId);
      const coords = await coordsRef.get().then((doc) => {
        if (doc) {
          console.log('Getting character coords');
          return doc.data();
        } else {
          console.log('No such character coords!');
        }
      });

      // Test max relative distance from origin(X0,Y0) deltaX=0.042 / deltaY=0.01
      const testX = Math.abs(relX - coords.relX0) < 0.042;
      const testY = Math.abs(relY - coords.relY0) < 0.01;

      if (testX && testY) {
        setSnackbar({
          text: `You found ${itemName}!`,
          bg: 'green',
        });
        toggleSnackbar();
        toggleFound(itemId);
      } else {
        setSnackbar({ text: `Keep Looking!`, bg: 'red' });
        toggleSnackbar();
      }
      // close ContextMenu
      toggleMenuOpen();
    } catch (error) {
      console.error('A wild Error appeared!', error);
    }
  };

  return (
    <div className={styles.root} onClick={handleImageClick} ref={imgRef}>
      {openSnackbar && <Snackbar bg={snackbar.bg}>{snackbar.text}</Snackbar>}
      {menuOpen && (
        <ContextMenu
          list={list}
          xPos={menuCoords.x}
          yPos={menuCoords.y}
          handleMenuClick={handleMenuClick}
          handleWin={handleWin}
        />
      )}
      <img className={styles.image} src={imageUrl} alt={imageName} />
      <MadeBy
        position="left"
        text="by"
        author="Lucio"
        link="https://github.com/JCarlosLucio/where-is-waldo"
      />

      <MadeBy
        position="right"
        text="Image by"
        author={imageAuthor}
        link="https://www.instagram.com/ad.2.222/"
      />
    </div>
  );
}

export default GameImage;
