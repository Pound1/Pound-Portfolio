import React from 'react';
import img1 from '../assets/gallery/UniProject-ChessRender1.jpg';
import img2 from '../assets/gallery/Uni Project-Chess Render 2.jpg';
import styles from './GalleryStyles.module.css';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

// const images = [img1, img2];

function Gallery() {
  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];
  return (
    <div className={styles.container}>
      {/* {images.map((image, index) => (
        <img key={index} src={image} alt={`image-${index}`} />
      ))} */}

      <ImageGallery
        items={images}
        showFullscreenButton={false}
        showPlayButton={false}
        showIndex={true}
      />
    </div>
  );
}

export default Gallery;
