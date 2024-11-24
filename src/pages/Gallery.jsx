import React from 'react';
import img1 from '../assets/gallery/UniProject-ChessRender1.jpg';
import img2 from '../assets/gallery/Uni Project-Chess Render 2.jpg';
import styles from './GalleryStyles.module.css';

const images = [img1, img2];

function Gallery() {
  return (
    <div className={styles.container}>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`image-${index}`} />
      ))}
    </div>
  );
}

export default Gallery;
