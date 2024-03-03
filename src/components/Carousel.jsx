import AliceCarousel from 'react-alice-carousel';
import PropTypes from 'prop-types';
import StartDialog from './StartDialog';
import Logo from './Logo';
import 'react-alice-carousel/lib/alice-carousel.css';
import styles from './Carousel.module.scss';

const responsive = {
  0: { items: 1 },
  568: { items: 1 },
  1024: { items: 1 },
};

function Carousel({ imageList, handleStart }) {
  const images = imageList.map((image) => (
    <div key={image.id} className={styles['image-card']}>
      <StartDialog
        list={image.itemList}
        imageName={image.imageName}
        imageAuthor={image.imageAuthor}
        imageUrl={image.imageUrl}
        handleStart={() => handleStart(image)}
      />
    </div>
  ));

  return (
    <div className={styles.root}>
      <Logo big primary="white" secondary="red" />
      <p className={styles.instructions}>Swipe to choose image to play</p>
      <AliceCarousel
        infinite
        mouseTracking
        disableButtonsControls
        items={images}
        responsive={responsive}
      />
    </div>
  );
}

Carousel.propTypes = {
  imageList: PropTypes.array,
  handleStart: PropTypes.func,
};

export default Carousel;
