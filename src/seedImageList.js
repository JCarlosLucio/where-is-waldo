// The Loc Nar
import theLocNar from './assets/the-loc-nar.jpg';
import bowser from './assets/bowser.png';
import yubaba from './assets/yubaba.png';
import theKnight from './assets/the-knight.webp';
// Universe 113
import universe113 from './assets/universe-113.jpg';
import cacodemon from './assets/cacodemon.png';
import billCipher from './assets/bill-cipher.png';
import courage from './assets/courage.png';

const imageList = [
  {
    /* 
      The Loc Nar by Egor Klyuchnyk
      Instagram https://www.instagram.com/ad.2.222/
      Patreon https://www.patreon.com/Egor
      Buy his poster https://anomaly-world.com/posters-by-anomaly-world/cyberpunk-poster-ad2222
    */
    id: 'the-loc-nar',
    imageName: 'The Loc Nar',
    imageAuthor: 'Egor Klyuchnyk',
    imageUrl: theLocNar,
    itemList: [
      // Easy
      {
        id: 'bowser',
        name: 'Bowser',
        franchise: 'Super Mario Bros',
        image: bowser,
        difficulty: 'easy',
        found: false,
        relX0: 0.84,
        relY0: 0.41,
      },
      // Medium
      {
        id: 'yubaba',
        name: 'Yubaba',
        franchise: 'Spirited Away',
        image: yubaba,
        difficulty: 'medium',
        found: false,
        relX0: 0.52,
        relY0: 0.058,
      },
      // Hard
      {
        id: 'the-knight',
        name: 'The Knight',
        franchise: 'Hollow Knight',
        image: theKnight,
        difficulty: 'hard',
        found: false,
        relX0: 0.6,
        relY0: 0.92,
      },
    ],
  },
  {
    /* 
      Universe 113 by Egor Klyuchnyk
      Instagram https://www.instagram.com/ad.2.222/
      Patreon https://www.patreon.com/Egor
      Buy his poster https://anomaly-world.com/posters-by-anomaly-world/universe-113-poster
    */
    id: 'universe-113',
    imageName: 'Universe 113',
    imageAuthor: 'Egor Klyuchnyk',
    imageUrl: universe113,
    itemList: [
      // Easy
      {
        id: 'cacodemon',
        name: 'Cacodemon',
        franchise: 'DOOM',
        image: cacodemon,
        difficulty: 'easy',
        found: false,
        relX0: 0.52,
        relY0: 0.245,
      },
      // Medium
      {
        id: 'bill-cipher',
        name: 'Bill Cipher',
        franchise: 'Gravity Falls',
        image: billCipher,
        difficulty: 'medium',
        found: false,
        relX0: 0.71,
        relY0: 0.65,
      },
      // Hard
      {
        id: 'courage',
        name: 'Courage',
        franchise: 'Courage the Cowardly Dog',
        image: courage,
        difficulty: 'hard',
        found: false,
        relX0: 0.315,
        relY0: 0.519,
      },
    ],
  },
];

export default imageList;
