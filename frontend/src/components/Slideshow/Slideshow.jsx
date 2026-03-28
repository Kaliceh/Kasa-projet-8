import { useState } from "react";
import styles from "./Slideshow.module.css";
import ArrowLeft from "../../assets/ArrowLeft.png";
import ArrowRight from "../../assets/ArrowRight.png";
import NoImage from "../../assets/noImage2.png"

export function Slideshow(props) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const pictures = props.pictures || [];

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

    const hasMultiplePictures = pictures.length > 1;

    return (

        <div className={styles.carouselContainer}>
            <img
                src={pictures.length > 0
                    ? pictures[currentIndex]
                    : NoImage
                }
                alt={`image ${currentIndex + 1}`}
                className={styles.carouselImage}
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = NoImage;
                }
                }
            />

            {hasMultiplePictures && (
                <>
                    <img
                        src={ArrowLeft}
                        alt="Précédent"
                        className={styles.arrowLeft}
                        onClick={prevSlide}
                    />

                    <img
                        src={ArrowRight}
                        alt="Suivant"
                        className={styles.arrowRight}
                        onClick={nextSlide}
                    />

                    <div className={styles.slideCounter}>
                        {currentIndex + 1}/{props.pictures.length}
                    </div>
                </>
            )}
        </div>
    )
}
