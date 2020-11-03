import React, { useState } from 'react';
import useToggle from '../hooks/useToggle';
import ContextMenu from './ContextMenu';
import CustomCursor from './CustomCursor';
import styles from './GameImage.module.scss';

function GameImage({ list, imageUrl, imageName }) {
  const [menuOpen, toggleMenuOpen] = useToggle(false);
  const [xMenu, setXMenu] = useState(0);
  const [yMenu, setYMenu] = useState(0);
  const [cursorCoords, setCursorCoords] = useState({ x: 0, y: 0 });

  const handleImageClick = (e) => {
    e.preventDefault();
    const xPos = e.pageX;
    const yPos = e.pageY;
    console.log({ xPos }, { yPos });
    setXMenu(xPos);
    setYMenu(yPos);
    toggleMenuOpen();
  };
  const handleMouseMove = (e) => {
    const x = e.pageX;
    const y = e.pageY;
    setCursorCoords({ x, y });
  };
  const handleMenuClick = (id, x, y) => {
    console.log({ id }, { x }, { y });
    toggleMenuOpen();
  };

  return (
    <div
      className={styles.root}
      onMouseMove={handleMouseMove}
      onClick={handleImageClick}
    >
      <CustomCursor xPos={cursorCoords.x} yPos={cursorCoords.y} />
      {menuOpen && (
        <ContextMenu
          list={list}
          xPos={xMenu}
          yPos={yMenu}
          handleMenuClick={handleMenuClick}
        />
      )}
      <img className={styles.image} src={imageUrl} alt={imageName} />
    </div>
  );
}

export default GameImage;
