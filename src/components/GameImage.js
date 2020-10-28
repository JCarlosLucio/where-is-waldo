import React, { useState } from 'react';
import ContextMenu from './ContextMenu';
import styles from './GameImage.module.scss';

function GameImage() {
  const IMAGE_URL = 'https://i.imgur.com/N4wefbX.jpg';
  const [menuOpen, setMenuOpen] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleClick = (e) => {
    e.preventDefault();
    const xPos = e.pageX;
    const yPos = e.pageY;
    console.log({ xPos }, { yPos });
    setX(xPos);
    setY(yPos);
    setMenuOpen(!menuOpen);
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
        src={IMAGE_URL}
        useMap="#the-loc-nar"
        alt="the loc nar"
      />
    </div>
  );
}

export default GameImage;
