import React from 'react';
import ImageMapper from 'react-image-mapper';

function GameImage() {
  const IMAGE_URL = 'https://i.imgur.com/N4wefbX.jpg';
  const AREAS_MAP = {
    name: 'The Loc Nar',
    areas: [],
  };

  return (
    <div>
      <h1>GAME IMAGE</h1>
      <ImageMapper src={IMAGE_URL} map={AREAS_MAP} />
      {/* The Loc Nar by Egor Klyuchnyk*/}
      {/* Instagram https://www.instagram.com/ad.2.222/*/}
      {/* Patreon https://www.patreon.com/Egor*/}
      {/* Buy his poster https://anomaly-world.com/posters-by-anomaly-world/cyberpunk-poster-ad2222*/}
    </div>
  );
}

export default GameImage;
