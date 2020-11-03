import React, { useState } from 'react';
import useToggle from '../hooks/useToggle';
import ContextMenu from './ContextMenu';
import CustomCursor from './CustomCursor';
import styles from './GameImage.module.scss';

function GameImage({ list, imageUrl, imageName }) {
  const [menuOpen, toggleMenuOpen] = useToggle(false);
  const [xMenu, setXMenu] = useState(0);
  const [yMenu, setYMenu] = useState(0);
  const [xCursor, setXCursor] = useState(0);
  const [yCursor, setYCursor] = useState(0);

  const handleClick = (e) => {
    e.preventDefault();
    const xPos = e.pageX;
    const yPos = e.pageY;
    console.log({ xPos }, { yPos });
    setXMenu(xPos);
    setYMenu(yPos);
    toggleMenuOpen();
  };

  return (
    <div className={styles.root} onClick={handleClick}>
      <CustomCursor xPos={xCursor} yPos={yCursor} />
      {menuOpen && <ContextMenu list={list} xPos={xMenu} yPos={yMenu} />}
      <img className={styles.image} src={imageUrl} alt={imageName} />
    </div>
  );
}

export default GameImage;
