import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import StartDialog from './StartDialog';
import 'react-alice-carousel/lib/alice-carousel.css';
import styles from './Carousel.module.scss';

const responsive = {
  0: { items: 1 },
  568: { items: 1 },
  1024: { items: 1 },
};

function Carousel({ imageList, handleStart }) {
  const images = imageList.map((image) => (
    <div className={styles['image-card']}>
      <StartDialog
        list={image.itemList}
        imageName={image.imageName}
        imageUrl={image.imageUrl}
        handleStart={() => handleStart(image)}
      />
    </div>
  ));
  console.log(images);
  return (
    <div className={styles.root}>
      <AliceCarousel
        mouseTracking
        disableButtonsControls
        items={images}
        responsive={responsive}
      />
    </div>
  );
}

export default Carousel;
