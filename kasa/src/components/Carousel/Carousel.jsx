import { useState } from "react";
import styles from "../Carousel/Carousel.module.css";

export function Carousel(props) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        if (!props?.pictures) return;
        setCurrentIndex((prev) =>
            prev === props.pictures.length - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        if (!props?.pictures) return;
        setCurrentIndex((prev) =>
            prev === 0 ? props.pictures.length - 1 : prev - 1
        );
    };

        const hasMultiplePictures = props.pictures.length > 1;

    return (


         <div className={styles.logementGallery}>
                        <img
                            src={props.pictures[currentIndex]}
                            alt={`image ${currentIndex + 1}`}
                            className={styles.carouselImage}
                        />
        
                        {hasMultiplePictures && (
                            <>
                                {/* Flèches minimalistes */}
                                <button className={styles.arrowLeft} onClick={prevSlide}>
                                    ❮
                                </button>
                                <button className={styles.arrowRight} onClick={nextSlide}>
                                    ❯
                                </button>
        
                                {/* Indicateur fractionnel */}
                                <div className={styles.slideCounter}>
                                    {currentIndex + 1}/{props.pictures.length}
                                </div>
                            </>
                        )}
                    </div>
    )
}