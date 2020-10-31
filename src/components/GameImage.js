import React, { useState } from 'react';
import useToggle from '../hooks/useToggle';
import ContextMenu from './ContextMenu';
import styles from './GameImage.module.scss';

function GameImage({ imageUrl }) {
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
      {/* 
          The Loc Nar by Egor Klyuchnyk
          Instagram https://www.instagram.com/ad.2.222/
          Patreon https://www.patreon.com/Egor
          Buy his poster https://anomaly-world.com/posters-by-anomaly-world/cyberpunk-poster-ad2222
          */}
      {menuOpen && <ContextMenu xPos={x} yPos={y} />}
      <img
        className={styles.image}
        src={imageUrl}
        useMap="#the-loc-nar"
        alt="the loc nar"
      />
    </div>
  );
}

export default GameImage;
