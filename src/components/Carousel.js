import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import StartDialog from './StartDialog';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
  0: { items: 1 },
  568: { items: 1 },
  1024: { items: 1 },
};

function Carousel({ imageList, handleStart }) {
  const images = imageList.map((image) => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <StartDialog
        list={image.itemList}
        imageName={image.imageName}
        imageUrl={image.imageUrl}
        handleStart={handleStart}
      />
    </div>
  ));
  console.log(images);
  return <AliceCarousel mouseTracking items={images} responsive={responsive} />;
}

export default Carousel;
