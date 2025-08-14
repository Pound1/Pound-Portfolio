import React, {useEffect, useState} from "react";
import styles from './GalleryStyles.module.css';

const imageModules = import.meta.glob(('../../assets/images/**/*.{jpg,jpeg,png,svg}'), { eager: true });

const images = Object.values(imageModules).map((module) => module.default);

console.log(images);

const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const handleClick = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    }
    
    return (
        <div className={styles.carousel} style={{textAlign: 'center', marginTop: '20px'}}>
            <img
                src={images[currentIndex]}                
                alt={`Image ${currentIndex + 1}`}
                onClick={handleClick}
                />
        </div>
    );
    };

export default Gallery;