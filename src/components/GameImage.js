import React, { useState } from 'react';
import useToggle from '../hooks/useToggle';
import ContextMenu from './ContextMenu';
import CustomCursor from './CustomCursor';
import styles from './GameImage.module.scss';

function GameImage({ list, imageUrl, imageName }) {
  const [menuOpen, toggleMenuOpen] = useToggle(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleClick = (e) => {
    e.preventDefault();
    const xPos = e.pageX;
    const yPos = e.pageY;
    console.log({ xPos }, { yPos });
    setX(xPos);
    setY(yPos);
    toggleMenuOpen();
  };

  return (
    <div className={styles.root} onClick={handleClick}>
      <CustomCursor />
      {menuOpen && <ContextMenu list={list} xPos={x} yPos={y} />}
      <img className={styles.image} src={imageUrl} alt={imageName} />
    </div>
  );
}

export default GameImage;
