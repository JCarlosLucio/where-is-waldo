import React, { useState, useRef } from 'react';
import useToggle from '../hooks/useToggle';
import useSnackbar from '../hooks/useSnackbar';
import ContextMenu from './ContextMenu';
import Snackbar from './Snackbar';
import MadeBy from './MadeBy';
import styles from './GameImage.module.scss';
import { firestore } from '../firebase/config';

function GameImage({ list, imageUrl, imageName, imageAuthor, toggleFound }) {
  const [menuOpen, toggleMenuOpen] = useToggle(false);
  const [menuCoords, setMenuCoords] = useState({ x: 0, y: 0 });

  const [
    textSnackbar,
    bgSnackbar,
    openSnackbar,
    setTextSnackbar,
    setBgSnackbar,
    toggleSnackbar,
  ] = useSnackbar('', 'gray', 3000);
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
      let coords;
      await firestore.collection('coords').doc(itemId).get().then((doc) => {
        if (doc) {
          console.log('Coords Doc', doc.data());
          coords = doc.data();
        } else {
          console.log('No such document!');
        }
      });

      // use relative form so it can work on any screen size
      const relX = x / width;
      const relY = (y - 60) / height; // 60 is height of navbar
      const testX = Math.abs(relX - coords.relX0) < 0.042; // 0.042  max relative deltaX
      const testY = Math.abs(relY - coords.relY0) < 0.01; // 0.01  max relative deltaY
      if (testX && testY) {
        setTextSnackbar(`You have found ${itemName}!`);
        setBgSnackbar('green');
        toggleSnackbar();
        toggleFound(itemId);
      } else {
        setTextSnackbar('Keep looking!');
        setBgSnackbar('red');
        toggleSnackbar();
      }
      console.log(
        { itemId },
        { relX0: coords.relX0 },
        { relY0: coords.relY0 },
        { relX },
        { relY },
        { testX },
        { testY }
      );

      toggleMenuOpen();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.root} onClick={handleImageClick} ref={imgRef}>
      {openSnackbar && <Snackbar bg={bgSnackbar}>{textSnackbar}</Snackbar>}
      {menuOpen && (
        <ContextMenu
          list={list}
          xPos={menuCoords.x}
          yPos={menuCoords.y}
          handleMenuClick={handleMenuClick}
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
