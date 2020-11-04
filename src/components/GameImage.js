import React, { useState, useRef } from 'react';
import useToggle from '../hooks/useToggle';
import ContextMenu from './ContextMenu';
import CustomCursor from './CustomCursor';
import styles from './GameImage.module.scss';

function GameImage({ list, imageUrl, imageName, toggleFound }) {
  const [menuOpen, toggleMenuOpen] = useToggle(false);
  const [menuCoords, setMenuCoords] = useState({ x: 0, y: 0 });
  const [cursorCoords, setCursorCoords] = useState({ x: 0, y: 0 });
  const imgRef = useRef();

  const handleImageClick = (event) => {
    event.preventDefault();
    const { pageX: x, pageY: y } = event;
    setMenuCoords({ x, y });
    toggleMenuOpen();
  };

  const handleMouseMove = (event) => {
    const { pageX: x, pageY: y } = event;
    setCursorCoords({ x, y });
  };

  const handleMenuClick = (itemId, relX0, relY0, x, y) => {
    // x / y coords are taken from complete page (take navbar into account)
    // width / height reference GameImage (don't take navbar into account)
    const width = imgRef.current.offsetWidth;
    const height = imgRef.current.offsetHeight;

    // use relative form so it can work on any screen size
    const relX = x / width;
    const relY = (y - 60) / height; // 60 is height of navbar
    const testX = Math.abs(relX - relX0) < 0.042; // 0.042  max relative deltaX
    const testY = Math.abs(relY - relY0) < 0.01; // 0.01  max relative deltaY
    if (testX && testY) {
      toggleFound(itemId);
    }
    console.log(
      { itemId },
      { relX0 },
      { relY0 },
      { relX },
      { relY },
      { testX },
      { testY }
    );

    toggleMenuOpen();
  };

  return (
    <div
      className={styles.root}
      onMouseMove={handleMouseMove}
      onClick={handleImageClick}
      ref={imgRef}
    >
      <CustomCursor xPos={cursorCoords.x} yPos={cursorCoords.y} />
      {menuOpen && (
        <ContextMenu
          list={list}
          xPos={menuCoords.x}
          yPos={menuCoords.y}
          handleMenuClick={handleMenuClick}
        />
      )}
      <img className={styles.image} src={imageUrl} alt={imageName} />
    </div>
  );
}

export default GameImage;
