import React from 'react';

function GameImage() {
  const IMAGE_URL = 'https://i.imgur.com/N4wefbX.jpg';

  return (
    <div>
      <h1>GAME IMAGE</h1>
      <img src={IMAGE_URL} useMap="#the-loc-nar" alt="the loc nar" />
      <map name="the-loc-nar">
        <area
          target="_self"
          alt="Bowser"
          title="Bowser"
          href="#"
          coords="1578,3360,1779,3537"
          shape="rect"
        />
      </map>
      {/* The Loc Nar by Egor Klyuchnyk*/}
      {/* Instagram https://www.instagram.com/ad.2.222/*/}
      {/* Patreon https://www.patreon.com/Egor*/}
      {/* Buy his poster https://anomaly-world.com/posters-by-anomaly-world/cyberpunk-poster-ad2222*/}
    </div>
  );
}

export default GameImage;
