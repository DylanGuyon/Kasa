import React, { useState } from 'react';
import './Slider.scss'; 
import left from "../../assets/vector/vector-left.svg";
import right from "../../assets/vector/vector-right.svg";

export default function Slider({ pictures, maxHeight }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const totalImages = pictures.length;

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === totalImages - 1 ? 0 : prevIndex + 1));
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? totalImages - 1 : prevIndex - 1));
    };

    return (
        <div className="slider-container" style={{ maxWidth: '1440px', margin: 'auto', maxHeight: maxHeight }}>
            <img className="slider-image" src={pictures[currentImageIndex]} alt={`Image ${currentImageIndex + 1}/${totalImages}`} />
            {totalImages > 1 && ( // Condition pour afficher les boutons seulement s'il y a plus d'une image
                <>
                    <button className="slider-button slider-button-left" onClick={prevImage}>
                        <img src={left} alt="Left arrow" />
                    </button>
                    <button className="slider-button slider-button-right" onClick={nextImage}>
                        <img src={right} alt="Right arrow" />
                    </button>
                </>
            )}
            <div className="slider-indicator">{`${currentImageIndex + 1}/${totalImages}`}</div>
        </div>
    );
}