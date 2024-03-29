import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { doc, getDoc } from 'firebase/firestore';
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

  // checks for win condition every time list changes
  useEffect(() => {
    const win = list.every((item) => item.found);

    if (win) {
      handleWin();
    }
  }, [list, handleWin]);

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
      const coordsRef = doc(firestore, 'coords', itemId);
      const coordsSnap = await getDoc(coordsRef);

      if (!coordsSnap.exists()) {
        throw Error('No such character coords!');
      }

      const coords = coordsSnap.data();

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

GameImage.propTypes = {
  list: PropTypes.array,
  imageUrl: PropTypes.string,
  imageName: PropTypes.string,
  imageAuthor: PropTypes.string,
  toggleFound: PropTypes.func,
  handleWin: PropTypes.func,
};

export default GameImage;
