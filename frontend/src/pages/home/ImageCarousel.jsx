import React, { useEffect, useRef, useState } from "react";
import "../../styles/ImageCarousel.css";

const images = [
    "/carousel/slide1.jpg",
    "/carousel/slide2.jpg",
    "/carousel/slide3.jpg",
    "/carousel/slide4.jpg",
    "/carousel/slide5.jpg",
    "/carousel/slide6.jpg",
    "/carousel/slide7.jpg",
    "/carousel/slide8.jpg",

];

const ImageCarousel = ({ interval = 3500 }) => {
    const [current, setCurrent] = useState(0);
    const timeoutRef = useRef(null);

    // Automatically move to next slide
    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, interval);

        return () => clearTimeout(timeoutRef.current);
    }, [current, interval]);

    return (
        <div className="carousel-container">
            {images.map((src, idx) => (
                <img
                    key={idx}
                    src={src}
                    alt={`Slide ${idx + 1}`}
                    className={`carousel-image${idx === current ? " active" : ""}`}
                />
            ))}

            <div className="carousel-dots">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        className={`dot${idx === current ? " active" : ""}`}
                        onClick={() => setCurrent(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel;
