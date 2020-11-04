import React, { useState, useRef } from 'react';
import useToggle from '../hooks/useToggle';
import ContextMenu from './ContextMenu';
import CustomCursor from './CustomCursor';
import styles from './GameImage.module.scss';

function GameImage({ list, imageUrl, imageName }) {
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

  const handleMenuClick = (id, x, y) => {
    const width = imgRef.current.offsetWidth;
    const height = imgRef.current.offsetHeight;
    console.log(
      { id },
      { x },
      { y },
      { relX: x / width },
      { relY: (y - 60) / height }
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
