import React from 'react';
import '../../css/reactSlider.css';


// react-slideshow-image
import { Slide } from 'react-slideshow-image';

// slider images
import slider_1 from '../../imgs/iconHub_1.jpg';
import slider_2 from '../../imgs/iconHub_2.jpg';
import slider_4 from '../../imgs/iconHub_4.jpg';
 
const slideImages = [
    slider_1,
    slider_2,
    slider_4
];

// slider properties
const properties = {
    duration: 3000,
    transitionDuration: 800,
    infinite: true,
    indicators: true,
    arrows: true,
    onChange: (oldIndex, newIndex) => {
    }
}


const ReactSlider = () => {
    return (
        <div className="slide-container">
            <Slide {...properties}>
            <div className="each-slide">
                <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                </div>
            </div>
            <div className="each-slide">
                <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                </div>
            </div>
            <div className="each-slide">
                <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                </div>
            </div>
            </Slide>
        </div>
    );
}
 
export default ReactSlider;