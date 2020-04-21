import React, { useState } from 'react';
import Slider from './Slider';
import ImageList from '../ImageList';

const App = () => {
    const [slider, setSlider] = useState(ImageList);
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        let slidePosition = (currentSlide+1) >= slider.length ? 0 : currentSlide + 1;
        setCurrentSlide(slidePosition);
    }

    const prevSlide = () => {
        let slidePosition = currentSlide <= 0 ? (slider.length - 1) : currentSlide - 1;
        setCurrentSlide(slidePosition);
    }

    return (
        <div className="app">
            <div className="slider-arrow left-arrow" onClick={prevSlide}>&#8592;</div>
            <Slider src={slider[currentSlide]} />
            <div className="slider-arrow right-arrow" onClick={nextSlide}>&#8594;</div>
        </div>
    )
}

export default App;